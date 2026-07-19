# Frontend Development & Deployment Life Cycle

A practical frontend engineering project demonstrating the complete lifecycle of a modern frontend application — from development and version management to CI/CD automation and cloud deployment.

This repository focuses on scalable frontend engineering practices including **monorepo architecture**, **reusable packages**, **Semantic Versioning**, **automated release workflows**, **GitHub Actions**, **SonarQube analysis**, and **AWS-compatible local cloud testing using Floci**.

---

# 🚀 Project Overview

The purpose of this project is to demonstrate a complete frontend development and deployment lifecycle.

The project covers:

- Frontend application architecture
- Component-driven development
- Monorepo structure
- Shared package management
- Semantic Versioning (SemVer)
- Automated release management
- Local development workflows
- CI/CD automation
- Code quality validation
- Cloud deployment concepts
- AWS service simulation using Floci

---

# 🏗️ Repository Structure

```text
frontend-dev-and-deployment-life-cycle/
│
├── .github/
│   └── workflows/                    # GitHub Actions CI/CD workflows
│
├── apps/
│   └── client-central/               # Main frontend application
│
├── packages/                         # Shared reusable packages
│
├── .gitignore                        # Git ignore configuration
│
├── .release.config.cjs               # Semantic Release configuration
│
├── lerna.json                        # Lerna monorepo configuration
│
├── package.json                      # Root dependencies and scripts
│
├── pnpm-lock.yaml                    # Dependency lock file
│
├── pnpm-workspace.yaml               # pnpm workspace configuration
│
├── sonar-project.properties          # SonarQube configuration
│
└── words.md                          # Project documentation notes
```

---

# 🏛️ Architecture Overview

This project follows a monorepo architecture where multiple applications and reusable packages are managed inside a single repository.

```text
                    Repository
                        |
        --------------------------------
        |                              |
        ↓                              ↓

     apps/                         packages/

 client-central              Shared Libraries
 Frontend App                 Reusable Modules

        |
        ↓

 GitHub Actions
        |
        ↓

 Build → Test → Release → Deploy
```

## Benefits of this approach

- Centralized dependency management
- Code reuse across applications
- Consistent development standards
- Simplified CI/CD pipelines
- Easier package version management

---

# 🛠️ Tech Stack

## Frontend

- TypeScript
- JavaScript
- HTML
- CSS

## Development & Build Tools

- pnpm
- Lerna
- GitHub Actions
- SonarQube

## Version & Release Management

- Semantic Versioning (SemVer)
- Semantic Release

## Cloud Development

- Floci (AWS mock environment)
- AWS CLI
- Docker

---

# 📦 Monorepo Management

The repository uses:

## pnpm Workspaces

Workspace configuration:

```text
pnpm-workspace.yaml
```

Used for:

- Dependency management
- Package linking
- Faster installations
- Workspace scripts

---

## Lerna

Configuration:

```text
lerna.json
```

Used for:

- Managing packages
- Versioning workflows
- Monorepo operations

---

# 📌 Semantic Versioning (SemVer)

This project follows **Semantic Versioning** for application and package releases.

Version format:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
1.4.2
```

## Version Rules

| Version | Description |
|---|---|
| MAJOR | Breaking changes requiring migration |
| MINOR | New backward-compatible features |
| PATCH | Bug fixes and improvements |

Example:

```text
1.0.0
 |
 ├── 1.1.0 → New feature release
 |
 ├── 1.1.1 → Bug fix release
 |
 └── 2.0.0 → Breaking change release
```

---

# 🔖 Release Management

The project uses **Semantic Release** to automate version management.

Configuration:

```text
.release.config.cjs
```

Release workflow:

```text
Developer Commit
        |
        ↓
Pull Request
        |
        ↓
CI Validation
        |
        ↓
Semantic Release Analysis
        |
        ↓
Version Calculation
        |
        ↓
Git Tag Creation
        |
        ↓
Deployment
```

Example release tag:

```bash
git tag v1.2.0

git push origin v1.2.0
```

---

# 🔄 Development Workflow

The overall development lifecycle:

```text
Requirement
      |
      ↓
Feature Development
      |
      ↓
Code Review
      |
      ↓
Quality Checks
      |
      ↓
Build
      |
      ↓
Release
      |
      ↓
Deployment
```

---

# 🔍 Code Quality Process

Quality validation includes:

- Type checking
- Linting
- Automated tests
- SonarQube analysis
- Build validation

Example:

```bash
pnpm lint
```

SonarQube configuration:

```text
sonar-project.properties
```

---

# ⚙️ CI/CD Pipeline

GitHub Actions workflows are maintained under:

```text
.github/workflows/
```

Pipeline flow:

```text
Developer Push
        |
        ↓
Install Dependencies
        |
        ↓
Run Tests
        |
        ↓
Code Quality Analysis
        |
        ↓
Build Application
        |
        ↓
Semantic Release
        |
        ↓
Deployment
```

---

# ☁️ Local AWS Development Using Floci

## Why Floci?

Floci provides an AWS-compatible local development environment.

It allows cloud workflows to be tested locally before connecting to real AWS infrastructure.

Benefits:

- Local AWS service simulation
- Faster development feedback
- Reduced cloud dependency during development
- Safer infrastructure testing

---

# ▶️ Running Floci

Using Docker:

```bash
docker run --rm -p 4566:4566 floci/floci:latest
```

Or:

```bash
floci start
```

Configure AWS CLI:

```bash
export AWS_ENDPOINT_URL=http://localhost:4566

export AWS_DEFAULT_REGION=us-east-1

export AWS_ACCESS_KEY_ID=test

export AWS_SECRET_ACCESS_KEY=test
```

---

# 🪣 Mock AWS S3 Deployment Flow

Build frontend application:

```bash
pnpm build
```

Create local S3 bucket:

```bash
aws s3 mb s3://client-central-assets
```

Upload frontend assets:

```bash
aws s3 cp ./dist s3://client-central-assets --recursive
```

Verify files:

```bash
aws s3 ls s3://client-central-assets
```

This simulates uploading frontend build artifacts to AWS S3.

---

# 🚀 Deployment Architecture

Production deployment flow:

```text
Frontend Application
        |
        ↓
Production Build
        |
        ↓
AWS S3 Static Hosting
        |
        ↓
CloudFront CDN
        |
        ↓
Users
```

Cloud deployment workflows can first be validated locally using Floci.

---

# 📋 Prerequisites

Install:

- Node.js (LTS)
- pnpm
- Docker
- AWS CLI
- Floci

Verify:

```bash
node -v
pnpm -v
docker --version
aws --version
```

---

# ⚡ Getting Started

## Clone Repository

```bash
git clone https://github.com/varunDarshan356/frontend-development-lifecycle.git

cd frontend-development-lifecycle
```

---

## Install Dependencies

```bash
pnpm install
```

---

## Start Development

```bash
pnpm dev
```

Application:

```text
apps/client-central
```

---

# 🧪 Useful Commands

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm dev
```

Build application:

```bash
pnpm build
```

Run tests:

```bash
pnpm test
```

Run linting:

```bash
pnpm lint
```

View workspace packages:

```bash
pnpm list --depth -1
```

---

# 🎯 Learning Outcomes

✅ Modern frontend architecture  
✅ Monorepo development using pnpm and Lerna  
✅ Workspace-based dependency management  
✅ Semantic Versioning and automated releases  
✅ GitHub Actions CI/CD workflows  
✅ SonarQube integration  
✅ Cloud deployment patterns  
✅ AWS service integration concepts  
✅ Local cloud testing using Floci  
