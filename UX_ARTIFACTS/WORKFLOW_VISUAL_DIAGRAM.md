# GitHub PR to Jira Integration - Visual Workflow

## Swimlane Diagram

This diagram shows the automated workflow when a developer creates a Pull Request.

```mermaid
graph TD
    subgraph Developer
        A[Create Feature Branch<br/>feature/SCRUM-5] --> B[Write Code<br/>& Commit]
        B --> C[Open Pull Request<br/>#quot;SCRUM-5 Feature#quot;]
    end

    subgraph GitHub_Actions[GitHub Actions]
        D[Detect PR Event<br/>webhook triggered] --> E[Extract Jira Key<br/>regex: SCRUM-5]
        E --> F[Authenticate to Jira<br/>API token]
        F --> G[Call Jira API<br/>POST transition]
    end

    subgraph Jira_System[Jira System]
        H[Validate Issue Key<br/>SCRUM-5 exists?] --> I{Valid?}
        I -->|Yes| J[Transition Issue<br/>To Do → In Review]
        I -->|No| K[Return Error<br/>Invalid key]
        J --> L[Add Comment<br/>with PR link]
        L --> M[Update Status<br/>Complete]
    end

    C --> D
    G --> H
    M --> N[Developer Notified<br/>via Jira comment]

    style A fill:#E3F2FD
    style B fill:#E3F2FD
    style C fill:#E3F2FD
    style D fill:#E8F5E9
    style E fill:#E8F5E9
    style F fill:#E8F5E9
    style G fill:#E8F5E9
    style H fill:#FFF9C4
    style I fill:#FFF9C4
    style J fill:#FFF9C4
    style L fill:#FFF9C4
    style M fill:#FFF9C4
    style N fill:#E3F2FD
```

---

## Process Flow (Simplified)

```mermaid
flowchart LR
    A[Developer<br/>Creates PR] --> B[GitHub Actions<br/>Detects Event]
    B --> C[Extract<br/>Jira Key]
    C --> D{Key<br/>Valid?}
    D -->|Yes| E[Update<br/>Jira Status]
    D -->|No| F[Fail with<br/>Error]
    E --> G[Add Comment<br/>with Link]
    G --> H[Developer<br/>Notified]

    style A fill:#90CAF9
    style B fill:#A5D6A7
    style C fill:#A5D6A7
    style D fill:#FFE082
    style E fill:#FFE082
    style F fill:#EF9A9A
    style G fill:#FFE082
    style H fill:#90CAF9
```

---

## Sequence Diagram (Actor Interactions)

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant GH as GitHub
    participant GHA as GitHub Actions
    participant Jira as Jira API

    Dev->>GH: Create PR (SCRUM-5)
    GH->>GHA: Trigger webhook
    GHA->>GHA: Extract "SCRUM-5"
    GHA->>Jira: GET /issue/SCRUM-5
    Jira-->>GHA: Issue details
    GHA->>Jira: POST /issue/SCRUM-5/transitions
    Jira-->>GHA: Success
    GHA->>Jira: POST /issue/SCRUM-5/comment
    Jira-->>GHA: Comment added
    Jira-->>Dev: Notification email
    GHA->>GH: Update PR status ✅
```

---

## State Transition Diagram

```mermaid
stateDiagram-v2
    [*] --> ToDo: Issue created
    ToDo --> InProgress: Developer starts work
    InProgress --> InReview: PR opened (automated)
    InReview --> InProgress: Changes requested
    InReview --> Done: PR merged (automated)
    Done --> [*]: Issue complete

    note right of InReview
        Auto-transition on PR open
        GitHub Actions workflow
    end note

    note right of Done
        Auto-transition on PR merge
        GitHub Actions workflow
    end note
```

---

## Before/After Comparison

### Before Automation (Manual Process)

```mermaid
graph TD
    A[Developer: Write Code] --> B[Developer: Create PR]
    B --> C[Developer: Switch to Jira]
    C --> D[Developer: Find Issue]
    D --> E[Developer: Update Status]
    E --> F[Developer: Copy PR URL]
    F --> G[Developer: Paste in Jira]
    G --> H[Developer: Add Comment]
    H --> I[Developer: Log Time]
    I --> J[Back to Coding]

    style A fill:#FFCDD2
    style C fill:#FFCDD2
    style D fill:#FFCDD2
    style E fill:#FFCDD2
    style F fill:#FFCDD2
    style G fill:#FFCDD2
    style H fill:#FFCDD2
    style I fill:#FFCDD2

    note[Manual steps: 7<br/>Context switches: 5<br/>Time: 5-10 minutes]
```

### After Automation (Automated Process)

```mermaid
graph TD
    A[Developer: Write Code] --> B[Developer: Create PR]
    B --> C[Automation: Update Jira]
    C --> D[Automation: Add Links]
    D --> E[Automation: Post Comments]
    E --> F[Developer: Continue Coding]

    style A fill:#C8E6C9
    style B fill:#C8E6C9
    style C fill:#A5D6A7
    style D fill:#A5D6A7
    style E fill:#A5D6A7
    style F fill:#C8E6C9

    note[Manual steps: 1<br/>Context switches: 0<br/>Time: < 10 seconds]
```

---

## Decision Logic Flow

```mermaid
flowchart TD
    Start([PR Event Received]) --> ExtractKey[Extract Jira Key<br/>from PR title/branch]
    ExtractKey --> HasKey{Jira Key<br/>Found?}

    HasKey -->|No| Fail1[Fail Validation<br/>Comment on PR]
    HasKey -->|Yes| ValidateKey[Call Jira API<br/>GET /issue/KEY]

    ValidateKey --> Exists{Issue<br/>Exists?}
    Exists -->|No| Fail2[Fail with Error<br/>Invalid Jira key]
    Exists -->|Yes| GetTransitions[GET available<br/>transitions]

    GetTransitions --> FindReview{Has 'In Review'<br/>transition?}
    FindReview -->|No| Warn[Log Warning<br/>Skip transition]
    FindReview -->|Yes| Transition[POST transition<br/>to 'In Review']

    Transition --> Success{API<br/>Success?}
    Success -->|No| Retry[Retry 3x<br/>exponential backoff]
    Success -->|Yes| AddComment[POST comment<br/>with PR link]

    AddComment --> Complete([Workflow Complete ✅])
    Retry --> MaxRetries{Max<br/>Retries?}
    MaxRetries -->|Yes| Fail3[Fail Workflow]
    MaxRetries -->|No| Transition

    Fail1 --> End([End])
    Fail2 --> End
    Fail3 --> End
    Warn --> Complete

    style Start fill:#90CAF9
    style Complete fill:#81C784
    style Fail1 fill:#EF5350
    style Fail2 fill:#EF5350
    style Fail3 fill:#EF5350
    style Warn fill:#FFB74D
```

---

## Benefits Summary

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Manual Steps** | 7 steps | 1 step | -86% |
| **Context Switches** | 5 per PR | 0 per PR | -100% |
| **Time per PR** | 5-10 min | <10 sec | -95% |
| **Errors** | ~30% forgotten | 0% | -100% |
| **Visibility** | 2-3 days lag | Real-time | Instant |

---

## Usage Instructions

### View in VS Code:
1. Open this file in VS Code
2. Press `Cmd+Shift+V` (or click preview icon)
3. Diagrams render automatically!

### View on GitHub:
- Just push this file - GitHub automatically renders Mermaid diagrams
- No export needed!

### Edit Diagrams:
- Just edit the text between \`\`\`mermaid and \`\`\`
- Preview updates live in VS Code

---

**This demonstrates:**
- ✅ Visual workflow design
- ✅ Process mapping (swimlanes, sequences, state machines)
- ✅ Before/after analysis
- ✅ Decision logic and error handling
- ✅ Technical documentation skills
