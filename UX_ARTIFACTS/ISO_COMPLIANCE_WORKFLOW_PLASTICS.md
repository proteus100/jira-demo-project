# ISO Compliance Workflow - Plastics Manufacturing

## Demonstrating UX/BA Skills for ISO Management Software

This document shows workflow design and process simplification for ISO compliance in a plastics manufacturing context—directly relevant to EmmersonWills' ISO simplification mission.

---

## Scenario: Injection Moulding Company

**Company Profile:**
- Medium-sized plastics manufacturer (50-100 employees)
- Injection moulding operations
- ISO 9001 (Quality), ISO 14001 (Environmental), ISO 45001 (H&S)
- Multiple production lines, 20+ moulds
- Annual certification audits

**Challenge:** Manual ISO compliance is overwhelming, time-consuming, and error-prone.

---

## 🎯 User Personas

### 1. Sarah - Production Operator
- **Role:** Injection moulding machine operator
- **Pain Points:** Paperwork interrupts production, can't remember all quality checks, handwriting illegible
- **Goals:** Get production done, avoid quality issues, go home on time
- **Tech Comfort:** Low (prefers simplicity)

### 2. Mike - Quality Manager
- **Role:** ISO compliance owner, prepares for audits
- **Pain Points:** Chasing missing paperwork, can't find evidence, audit panic mode
- **Goals:** Pass audits first time, prove compliance easily, reduce admin time
- **Tech Comfort:** Medium

### 3. Emma - HSE Coordinator
- **Role:** Health, Safety & Environment officer
- **Pain Points:** Incident reports incomplete, training records outdated, spreadsheet chaos
- **Goals:** Zero accidents, regulatory compliance, proactive risk management
- **Tech Comfort:** Medium-High

### 4. David - External Auditor
- **Role:** BSI/UKAS certification auditor
- **Pain Points:** Waiting for evidence, inconsistent documentation, wasted time
- **Goals:** Complete audit efficiently, verify compliance objectively
- **Tech Comfort:** High

---

## 📊 Workflow 1: Production Quality Check (ISO 9001)

### Before Automation (Current State - Manual)

```mermaid
graph TD
    A[Operator: Start Production Run] --> B[Operator: Find Paper Form]
    B --> C{Form Available?}
    C -->|No| D[Operator: Search Office]
    C -->|Yes| E[Operator: Fill Form by Hand]
    D --> E
    E --> F[Operator: Measure Parts]
    F --> G[Operator: Write Measurements]
    G --> H{Within Spec?}
    H -->|No| I[Operator: Find Supervisor]
    I --> J[Supervisor: Review Issue]
    J --> K[Supervisor: Handwrite NCR]
    K --> L[File in Cabinet]
    H -->|Yes| M[Operator: Sign Form]
    M --> N[Place in Tray]
    N --> O[End of Day: QM Collects]
    O --> P[QM: Manual Data Entry]
    P --> Q[QM: File in Cabinet]

    style A fill:#FFCDD2,stroke:#C62828,stroke-width:2px,color:#000
    style B fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style D fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style E fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style G fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style I fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style K fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style L fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style N fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style O fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style P fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style Q fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
```

**Problems:**
- ❌ 12+ manual steps per production run
- ❌ Forms get lost or damaged
- ❌ Handwriting illegible
- ❌ Data entry errors (~15%)
- ❌ Evidence scattered across filing cabinets
- ❌ Audit panic: "Where's the paperwork for batch X?"
- ❌ Time: 15-20 minutes per check

---

### After Automation (Future State - Simplified)

```mermaid
graph TD
    A[Operator: Start Production] --> B[Tablet: Select Mould & Material]
    B --> C[Tablet: Digital Checklist Appears]
    C --> D[Operator: Measure Parts]
    D --> E[Tablet: Enter Measurements]
    E --> F{Auto-Validation}
    F -->|Out of Spec| G[System: Alert Supervisor]
    F -->|In Spec| H[System: Auto-Save to Cloud]
    G --> I[Supervisor: Mobile Notification]
    I --> J[Supervisor: Review & Respond]
    J --> K[System: Create NCR Automatically]
    K --> L[System: Link to Batch Record]
    H --> L
    L --> M[Real-time Dashboard Update]
    M --> N[Audit Trail Complete]

    style A fill:#A5D6A7,stroke:#2E7D32,stroke-width:3px,color:#000
    style B fill:#A5D6A7,stroke:#2E7D32,stroke-width:3px,color:#000
    style C fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style D fill:#A5D6A7,stroke:#2E7D32,stroke-width:3px,color:#000
    style E fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style F fill:#FFD54F,stroke:#F57F17,stroke-width:3px,color:#000
    style G fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style H fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style I fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style J fill:#A5D6A7,stroke:#2E7D32,stroke-width:3px,color:#000
    style K fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style L fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style M fill:#66BB6A,stroke:#2E7D32,stroke-width:3px,color:#000
    style N fill:#66BB6A,stroke:#2E7D32,stroke-width:3px,color:#000
```

**Benefits:**
- ✅ 5 steps (down from 12)
- ✅ Digital forms always available
- ✅ Auto-validation catches errors immediately
- ✅ Cloud storage - never lose evidence
- ✅ Searchable, filterable data
- ✅ Audit-ready instantly
- ✅ Time: 3-5 minutes per check (75% reduction)

---

## 📊 Workflow 2: Environmental Waste Tracking (ISO 14001)

### Swimlane Diagram - Multi-Actor Process

```mermaid
graph TD
    subgraph Operator[Production Operator]
        A1[Change Resin Type] --> A2[Purge Machine]
        A2 --> A3[Tablet: Log Waste Material]
    end

    subgraph System[ISO Management Software]
        B1[Receive Waste Log] --> B2[Calculate Environmental Impact]
        B2 --> B3[Update Monthly Dashboard]
        B3 --> B4{Threshold Exceeded?}
        B4 -->|Yes| B5[Alert HSE Coordinator]
        B4 -->|No| B6[Log Complete]
    end

    subgraph HSE[HSE Coordinator]
        C1[Receive Alert] --> C2[Review Waste Data]
        C2 --> C3[Identify Root Cause]
        C3 --> C4[Create Action Plan]
        C4 --> C5[Assign to Production Manager]
    end

    subgraph Auditor[External Auditor]
        D1[Request Evidence] --> D2[Access Portal]
        D2 --> D3[View Waste Reports]
        D3 --> D4[Download Audit Trail]
        D4 --> D5[Verify Compliance]
    end

    A3 --> B1
    B5 --> C1
    B6 --> D2
    C5 --> B3

    style A1 fill:#BBDEFB,stroke:#1565C0,stroke-width:3px,color:#000
    style A2 fill:#BBDEFB,stroke:#1565C0,stroke-width:3px,color:#000
    style A3 fill:#BBDEFB,stroke:#1565C0,stroke-width:3px,color:#000
    style B1 fill:#C8E6C9,stroke:#2E7D32,stroke-width:3px,color:#000
    style B2 fill:#C8E6C9,stroke:#2E7D32,stroke-width:3px,color:#000
    style B3 fill:#C8E6C9,stroke:#2E7D32,stroke-width:3px,color:#000
    style B4 fill:#FFD54F,stroke:#F57F17,stroke-width:3px,color:#000
    style B5 fill:#C8E6C9,stroke:#2E7D32,stroke-width:3px,color:#000
    style B6 fill:#C8E6C9,stroke:#2E7D32,stroke-width:3px,color:#000
    style C1 fill:#FFF59D,stroke:#F57F17,stroke-width:3px,color:#000
    style C2 fill:#FFF59D,stroke:#F57F17,stroke-width:3px,color:#000
    style C3 fill:#FFF59D,stroke:#F57F17,stroke-width:3px,color:#000
    style C4 fill:#FFF59D,stroke:#F57F17,stroke-width:3px,color:#000
    style C5 fill:#FFF59D,stroke:#F57F17,stroke-width:3px,color:#000
    style D1 fill:#E1BEE7,stroke:#6A1B9A,stroke-width:3px,color:#000
    style D2 fill:#E1BEE7,stroke:#6A1B9A,stroke-width:3px,color:#000
    style D3 fill:#E1BEE7,stroke:#6A1B9A,stroke-width:3px,color:#000
    style D4 fill:#E1BEE7,stroke:#6A1B9A,stroke-width:3px,color:#000
    style D5 fill:#E1BEE7,stroke:#6A1B9A,stroke-width:3px,color:#000
```

**Key Features:**
- **Operator Lane (Blue):** Simple data entry at point of waste creation
- **System Lane (Green):** Automated calculations and alerts
- **HSE Lane (Yellow):** Proactive management when thresholds exceeded
- **Auditor Lane (Purple):** Self-service evidence access

---

## 📊 Workflow 3: Health & Safety Incident Management (ISO 45001)

### Sequence Diagram - Actor Interactions Over Time

```mermaid
sequenceDiagram
    participant Op as Operator
    participant Mobile as Mobile App
    participant System as ISO System
    participant HSE as HSE Coordinator
    participant Manager as Line Manager
    participant Auditor as External Auditor

    Note over Op,Mobile: Incident Occurs
    Op->>Mobile: Report incident (photo, details)
    Mobile->>System: Submit incident report
    System->>HSE: Immediate notification
    System->>Manager: Immediate notification

    Note over HSE,Manager: Investigation Phase
    HSE->>System: Access incident details
    HSE->>Op: Request additional info
    Op->>System: Provide witness statement
    Manager->>System: Add corrective actions

    Note over System: Automated Compliance
    System->>System: Create action tracker
    System->>System: Schedule follow-ups
    System->>System: Link to risk assessment

    Note over Manager: Action Implementation
    Manager->>System: Update action status
    System->>HSE: Progress notification
    HSE->>System: Verify completion
    System->>System: Close incident

    Note over Auditor: Audit Phase (6 months later)
    Auditor->>System: Request incident records
    System->>Auditor: Provide complete trail
    Auditor->>Auditor: Verify corrective actions
    Note over Auditor: Compliance verified ✓
```

**Demonstrating:**
- Real-time notifications across multiple roles
- Mobile-first design (operators use phones, not desktops)
- Automated workflow progression
- Complete audit trail maintained automatically
- Self-service for auditors

---

## 📊 Workflow 4: Audit Preparation Process

### State Transition Diagram

```mermaid
stateDiagram-v2
    [*] --> NotDue: 12 months after certification

    NotDue --> Planning: 90 days before audit
    Planning --> Preparation: Audit scheduled
    Preparation --> SelfAudit: 30 days before
    SelfAudit --> Remediation: Issues found
    SelfAudit --> Ready: All systems green
    Remediation --> Ready: Issues resolved
    Ready --> AuditDay: Auditor arrives
    AuditDay --> Findings: Non-conformances raised
    AuditDay --> Passed: Zero non-conformances
    Findings --> Corrective: Create action plans
    Corrective --> Verification: Actions complete
    Verification --> Passed: Auditor verifies
    Passed --> Certified: Certificate issued
    Certified --> [*]: Certification complete

    note right of Planning
        System auto-creates checklist
        Assigns preparation tasks
        Sends reminder emails
    end note

    note right of SelfAudit
        Software validates:
        - Training records current
        - Quality checks complete
        - Incidents closed
        - Documentation up-to-date
    end note

    note right of AuditDay
        Auditor portal provides:
        - All required evidence
        - Searchable documents
        - Real-time data access
        - Export functionality
    end note
```

**ISO Simplification Features:**
- **Automated reminders** - No more audit panic
- **Self-audit validation** - Find issues before auditor does
- **Evidence pre-staging** - Everything auditor needs, organized
- **Action tracking** - Close findings systematically

---

## 📊 Workflow 5: Document Control & Version Management

### Before/After Comparison - ISO 9001 Requirement

#### Before (Manual Document Control)

```mermaid
flowchart TD
    A[Employee Needs Procedure] --> B[Search Filing Cabinet]
    B --> C{Found Current Version?}
    C -->|No| D[Ask Colleagues]
    C -->|Yes| E[Check Issue Date]
    D --> F[Eventually Find Old Copy]
    E --> G{Is it Current?}
    G -->|Unknown| H[Call Quality Manager]
    G -->|No| I[Find Current Version]
    H --> J{QM Available?}
    J -->|No| K[Use Old Version Anyway]
    J -->|Yes| L[QM Emails PDF]
    F --> M[Risk: Using Wrong Version]
    K --> M
    I --> N[Photocopied Master]
    L --> O[Print Email]
    N --> P[More Paper to Control]
    O --> P

    style A fill:#FFCDD2,stroke:#C62828,stroke-width:2px,color:#000
    style B fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style D fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style F fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style H fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style I fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style K fill:#E57373,stroke:#C62828,stroke-width:3px,color:#FFF
    style M fill:#E57373,stroke:#C62828,stroke-width:3px,color:#FFF
    style N fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style O fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
    style P fill:#EF9A9A,stroke:#C62828,stroke-width:3px,color:#000
```

**Problems:**
- Version control nightmare
- Employees using outdated procedures
- Audit findings: "Obsolete documents in use"
- QM spends hours answering "which version is current?"

---

#### After (Digital Document Control)

```mermaid
flowchart TD
    A[Employee Needs Procedure] --> B[Open Portal/App]
    B --> C[Search or Browse]
    C --> D[System Shows Current Version Only]
    D --> E[View on Screen]
    E --> F{Need Offline Copy?}
    F -->|Yes| G[Download PDF with Watermark]
    F -->|No| H[Use Online]
    G --> I[Auto-expire after 7 days]
    H --> J[Track who accessed when]
    I --> J
    J --> K[Audit Trail Complete]

    L[Document Updated?] --> M[System Auto-notifies Affected Users]
    M --> N[Old Versions Archived Automatically]
    N --> O[All Users See New Version]

    style A fill:#A5D6A7,stroke:#2E7D32,stroke-width:3px,color:#000
    style B fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style C fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style D fill:#66BB6A,stroke:#2E7D32,stroke-width:3px,color:#000
    style E fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style G fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style H fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style I fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style J fill:#66BB6A,stroke:#2E7D32,stroke-width:3px,color:#000
    style K fill:#66BB6A,stroke:#2E7D32,stroke-width:3px,color:#000
    style L fill:#FFD54F,stroke:#F57F17,stroke-width:3px,color:#000
    style M fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style N fill:#81C784,stroke:#1B5E20,stroke-width:3px,color:#000
    style O fill:#66BB6A,stroke:#2E7D32,stroke-width:3px,color:#000
```

**Benefits:**
- ✅ Single source of truth
- ✅ Always current version
- ✅ Automatic version control
- ✅ Who accessed what, when (audit trail)
- ✅ Zero paper documents
- ✅ Mobile access from production floor

---

## 📊 Workflow 6: Client Portal - Auditor Self-Service

### Decision Flow - Auditor Experience

```mermaid
flowchart TD
    Start([Auditor Prepares for Visit]) --> Access[Access Client Portal]
    Access --> Login{Credentials Valid?}
    Login -->|No| Request[Request Access from Client]
    Login -->|Yes| Dashboard[View Audit Dashboard]

    Request --> Approve{Client Approves?}
    Approve -->|No| End1([Cannot Audit])
    Approve -->|Yes| Dashboard

    Dashboard --> Categories[Browse by ISO Clause]
    Categories --> Select[Select ISO 9001.8.5.1<br/>Production Control]

    Select --> Evidence[View Available Evidence]
    Evidence --> Filter[Apply Filters:<br/>- Date range<br/>- Product type<br/>- Operator]

    Filter --> Review[Review Documents]
    Review --> Sufficient{Sufficient<br/>Evidence?}

    Sufficient -->|No| Request2[Request Additional Evidence]
    Sufficient -->|Yes| Download[Download Audit Pack]

    Request2 --> Client[Client Uploads More]
    Client --> Review

    Download --> Sample[Select Random Samples]
    Sample --> Verify[Verify on Audit Day]
    Verify --> Complete([Audit Complete])

    style Start fill:#64B5F6,stroke:#1565C0,stroke-width:3px,color:#000
    style Dashboard fill:#E1BEE7,stroke:#6A1B9A,stroke-width:3px,color:#000
    style Categories fill:#E1BEE7,stroke:#6A1B9A,stroke-width:3px,color:#000
    style Evidence fill:#E1BEE7,stroke:#6A1B9A,stroke-width:3px,color:#000
    style Review fill:#E1BEE7,stroke:#6A1B9A,stroke-width:3px,color:#000
    style Download fill:#66BB6A,stroke:#2E7D32,stroke-width:3px,color:#000
    style Complete fill:#66BB6A,stroke:#2E7D32,stroke-width:3px,color:#000
    style Login fill:#FFD54F,stroke:#F57F17,stroke-width:3px,color:#000
    style Sufficient fill:#FFD54F,stroke:#F57F17,stroke-width:3px,color:#000
    style Approve fill:#FFD54F,stroke:#F57F17,stroke-width:3px,color:#000
    style Request fill:#FFF59D,stroke:#F57F17,stroke-width:2px,color:#000
    style Request2 fill:#FFF59D,stroke:#F57F17,stroke-width:2px,color:#000
    style Client fill:#BBDEFB,stroke:#1565C0,stroke-width:2px,color:#000
    style End1 fill:#E57373,stroke:#C62828,stroke-width:3px,color:#000
```

**Auditor Benefits:**
- Self-service access (no waiting for client to "find" evidence)
- Pre-audit document review (audit day is verification, not discovery)
- Filtered, searchable evidence
- Export functionality for audit reports
- Random sampling tools

**Client Benefits:**
- Less disruption during audit (auditor can pre-review)
- Professional presentation of evidence
- Faster audit completion
- Better audit outcomes

---

## 📊 Business Impact Metrics

### Time Savings Analysis

| Activity | Manual (Before) | Automated (After) | Time Saved | Annual Impact* |
|----------|----------------|-------------------|------------|----------------|
| **Quality Checks** | 15 min/check | 4 min/check | 73% | 458 hours |
| **Incident Reports** | 45 min/incident | 10 min/incident | 78% | 175 hours |
| **Waste Logging** | 10 min/entry | 2 min/entry | 80% | 200 hours |
| **Document Retrieval** | 12 min/search | 30 sec/search | 96% | 287 hours |
| **Audit Preparation** | 80 hours | 8 hours | 90% | 72 hours |
| **NCR Management** | 3 hours/NCR | 30 min/NCR | 83% | 200 hours |
| **Training Records** | 20 min/update | 3 min/update | 85% | 170 hours |
| **TOTAL ANNUAL SAVINGS** | | | **84%** | **1,562 hours** |

*Based on typical medium-sized plastics manufacturer (50-100 employees)

**ROI Calculation:**
- Time saved: 1,562 hours/year
- Average hourly rate: £25
- **Annual savings: £39,050**
- Software cost: ~£8,000/year
- **Net benefit: £31,050/year**
- **ROI: 388%**

---

## 🎯 UX/BA Skills Demonstrated

### In This Document:

✅ **User Persona Development** - 4 distinct personas with different needs
✅ **Journey Mapping** - Before/after user experiences
✅ **Process Flow Design** - 6 different workflow visualizations
✅ **Swimlane Diagrams** - Multi-actor process coordination
✅ **Sequence Diagrams** - Time-based interactions
✅ **State Diagrams** - Process lifecycle management
✅ **Decision Trees** - Complex logic visualization
✅ **Stakeholder Analysis** - Operators, managers, coordinators, auditors
✅ **Requirements Gathering** - ISO compliance mapped to software features
✅ **Metrics & ROI** - Quantified business impact
✅ **Domain Understanding** - ISO 9001/14001/45001 in manufacturing context

---

## 💼 Relevance to EmmersonWills

### How This Applies:

**Your Mission:** "ISO Simplification Experts"

**This Portfolio Shows:**
1. **Deep understanding** of ISO pain points (manual processes, lost evidence, audit stress)
2. **User empathy** across multiple personas (operators to auditors)
3. **Process improvement thinking** (84% time savings, 388% ROI)
4. **Visual communication** (complex processes made simple through diagrams)
5. **Domain knowledge** (ISO 9001/14001/45001 requirements in manufacturing)

**Interview Talking Point:**
> "I created these ISO compliance workflows to demonstrate how I'd approach simplification for your clients. The 'before' diagrams show the pain points I've observed in manual compliance systems. The 'after' diagrams show how thoughtful UX design can make ISO certification feel manageable rather than overwhelming—exactly what EmmersonWills delivers."

---

## 📚 ISO Standards Referenced

### Specific Clauses Addressed:

**ISO 9001:2015 (Quality Management)**
- Clause 8.5.1 - Control of production and service provision
- Clause 8.7 - Control of nonconforming outputs
- Clause 7.5 - Documented information
- Clause 9.1 - Monitoring, measurement, analysis and evaluation

**ISO 14001:2015 (Environmental Management)**
- Clause 8.1 - Operational planning and control
- Clause 9.1.1 - Monitoring, measurement, analysis and evaluation

**ISO 45001:2018 (Occupational Health & Safety)**
- Clause 10.2 - Incident, nonconformity and corrective action
- Clause 7.3 - Awareness
- Clause 9.1 - Monitoring, measurement, analysis and performance evaluation

---

**This document demonstrates the exact UX/BA capabilities EmmersonWills needs to continue wowing their growing client base in ISO simplification.** 🎯
