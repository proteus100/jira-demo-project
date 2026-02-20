# Jira-GitHub Integration Demo

> **Automated workflow integration demonstrating DevOps automation, API integration, and CI/CD best practices.**

[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Jira](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white)](https://www.atlassian.com/software/jira)

## 🎯 Project Overview

This project demonstrates a **production-ready integration** between GitHub and Jira that automatically:
- Transitions Jira issues when PRs are opened/merged
- Creates bi-directional links between code and requirements
- Supports smart commits for time tracking and comments
- Enforces Jira references on all pull requests

**Business Value:** Saves development teams ~2-3 hours per developer per week while improving traceability and stakeholder visibility.

## ✨ Features

### Automated Workflows
- ✅ **Auto-transition issues** - PR opened → Jira moves to "In Review"
- ✅ **Auto-close issues** - PR merged → Jira moves to "Done"
- ✅ **Bi-directional linking** - GitHub ↔ Jira cross-references
- ✅ **Smart commits** - Log time, add comments, transition issues from commit messages
- ✅ **PR validation** - Enforce Jira references on all pull requests

### Technical Implementation
- 🔧 GitHub Actions workflow automation
- 🔌 Jira REST API v3 integration
- 🔐 Secure authentication with API tokens
- 📝 Comprehensive documentation
- ✅ Production-ready error handling

## 🚀 Live Demo

### Working Examples

**Jira Board:** [View Live Board](https://southwestwebsolutions.atlassian.net/jira/software/projects/SCRUM/boards/1)

| Issue | Type | Status | GitHub PR | Demonstrates |
|-------|------|--------|-----------|--------------|
| SCRUM-5 | Story | ✅ Done | [PR #1](https://github.com/proteus100/jira-demo-project/pull/1) | Complete lifecycle (merged) |
| SCRUM-7 | Bug | 🔄 In Review | [PR #2](https://github.com/proteus100/jira-demo-project/pull/2) | Bug fix workflow (open) |

### Smart Commit Examples

```bash
# Log time to Jira
git commit -m "SCRUM-5 #time 2h Implemented authentication logic"

# Add comment to Jira
git commit -m "SCRUM-7 #comment Fixed navigation menu positioning"

# Close Jira issue
git commit -m "SCRUM-5 #close Completed feature and testing"

# Multiple actions
git commit -m "SCRUM-5 #time 1h 30m #comment Added error handling"
```

## 🏗️ Architecture

```
Developer → Git Commit → GitHub → GitHub Actions
                                        ↓
                                 Extract Jira Key (regex)
                                        ↓
                                 Authenticate (API Token)
                                        ↓
                                 Update Jira (REST API)
                                        ↓
                              Jira Board Updated ✅
```

### Technologies Used
- **GitHub Actions** - CI/CD automation
- **Jira REST API v3** - Issue management
- **YAML** - Workflow configuration
- **Bash** - Scripting and data extraction
- **Regular Expressions** - Pattern matching

## 📁 Project Structure

```
├── .github/
│   ├── workflows/
│   │   └── jira-integration.yml          # Main automation workflow
│   ├── ISSUE_TEMPLATE/                   # Bug/feature templates
│   ├── pull_request_template.md          # PR template
│   ├── JIRA_INTEGRATION.md               # Technical documentation
│   ├── QUICK_REFERENCE.md                # Cheat sheet
│   └── AUTOMATION_RULES.md               # Advanced concepts
├── src/
│   ├── auth.js                           # Example: Feature implementation
│   └── components/
│       └── Navigation.js                 # Example: Bug fix
├── JIRA_DEMO_SETUP.md                   # Complete setup guide
├── INTERVIEW_DEMO_GUIDE.md              # Interview preparation
└── README.md                            # This file
```

## ⚙️ How It Works

### 1. Pull Request Opened
```yaml
Event: PR opened with branch "feature/SCRUM-5-description"
  ↓
Workflow extracts "SCRUM-5" from branch name
  ↓
Authenticates to Jira using secrets
  ↓
Transitions SCRUM-5 to "In Review"
  ↓
Adds comment with PR link to Jira
```

### 2. Pull Request Merged
```yaml
Event: PR merged to main
  ↓
Workflow detects merge event
  ↓
Extracts Jira key from merged PR
  ↓
Transitions issue to "Done"
  ↓
Adds final comment to Jira
```

## 📊 Business Impact

### Quantifiable Benefits
- **Time Saved:** ~2-3 hours per developer per week
- **Traceability:** 100% of code changes linked to requirements
- **Visibility:** Real-time status updates for stakeholders
- **Compliance:** Complete audit trail for regulatory requirements

### Team Impact (5-person dev team)
- 10-15 hours saved weekly
- ~$200-300/week in labor cost savings
- Faster feedback loops for project management
- Reduced manual errors from forgotten updates

## 🔐 Security

- API tokens stored as encrypted GitHub secrets
- No credentials in code or logs
- Follows least-privilege principle
- Supports token rotation

## 🛠️ Setup Instructions

See [JIRA_DEMO_SETUP.md](JIRA_DEMO_SETUP.md) for complete setup instructions.

**Quick Start:**
1. Create Jira account and API token
2. Add GitHub secrets (JIRA_BASE_URL, JIRA_USER_EMAIL, JIRA_API_TOKEN)
3. Create PR with Jira reference in branch/title
4. Watch automation work!

## 📚 Documentation

- **[JIRA_DEMO_SETUP.md](JIRA_DEMO_SETUP.md)** - Complete setup guide
- **[INTERVIEW_DEMO_GUIDE.md](INTERVIEW_DEMO_GUIDE.md)** - Interview preparation
- **[.github/JIRA_INTEGRATION.md](.github/JIRA_INTEGRATION.md)** - Technical documentation
- **[.github/QUICK_REFERENCE.md](.github/QUICK_REFERENCE.md)** - Quick reference guide
- **[.github/AUTOMATION_RULES.md](.github/AUTOMATION_RULES.md)** - Advanced automation

## 🎯 Skills Demonstrated

### Technical Skills
- ✅ GitHub Actions & CI/CD
- ✅ REST API integration
- ✅ YAML configuration
- ✅ Bash scripting & regex
- ✅ OAuth/API authentication
- ✅ Event-driven architecture

### DevOps Practices
- ✅ Workflow automation
- ✅ Infrastructure as Code
- ✅ Secret management
- ✅ Documentation-first approach
- ✅ Incremental testing & debugging

### Soft Skills
- ✅ Problem-solving (debugging authentication issues)
- ✅ Technical documentation
- ✅ Process improvement thinking
- ✅ Stakeholder communication

## 🔄 Workflow Lifecycle Example

```
1. Developer creates branch: feature/SCRUM-5-user-auth
2. Developer commits: "SCRUM-5 #time 2h Added login functionality"
3. Developer opens PR → Jira: TO DO → IN REVIEW ✅
4. Code review happens
5. PR merged → Jira: IN REVIEW → DONE ✅
6. Issue complete, fully tracked!
```

## 🚀 Future Enhancements

Potential extensions:
- [ ] Slack notifications for PR reviews
- [ ] Automatic deployment on merge
- [ ] Release notes generation from Jira
- [ ] DORA metrics tracking
- [ ] Custom field updates
- [ ] Multi-project support

## 📝 License

This is a demonstration project for portfolio and interview purposes.

## 👤 Author

**David Patheyjohns**

- GitHub: [@proteus100](https://github.com/proteus100)
- LinkedIn: [Add your LinkedIn]
- Portfolio: [Add your portfolio site]

## 🙏 Acknowledgments

Built with modern development tools and best practices to demonstrate real-world DevOps automation capabilities.

---

**⭐ Star this repo if you find it useful for learning GitHub-Jira integration!**
