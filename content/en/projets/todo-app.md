## Context & Business Challenges

As part of earning my **Master's degree in Software Engineering (Bac+5 / French RNCP Level 7 Title)** at Ynov Campus Strasbourg, I spearheaded the complete transformation of Docker's reference _Getting Started Todo App_ into a scalable **Cloud-Native and DevSecOps distributed platform**.

The goal was to demonstrate mastery across the modern software engineering lifecycle: designing a modular microservices architecture, automating cloud infrastructure via Infrastructure as Code, enforcing Zero-Trust security principles, and managing operational reliability (MCO).

![Task management interface of the application](/works-and-projects/mastere-ynov/todo-app-cloud/images/notes_added.png)

## Cloud-Native Architecture & Infrastructure as Code (IaC)

The application infrastructure is declared and provisioned entirely through **Terraform** on Microsoft **Azure**:

- **Managed Kubernetes Cluster (Azure AKS):** Orchestration of containerized services (React frontend, Node.js/Express backend API, dedicated Auth service, and managed MySQL).
- **Isolated Virtual Network & Zero-Trust:** Deployed within a segregated private **VNet**, eliminating public internet exposure for the database tier.
- **Secure Secret Ingestion:** Secrets injected directly into container memory via the **Azure Key Vault Secrets Store CSI Driver**, eliminating plain-text credentials in config files or application code.

![Account management and security space](/works-and-projects/mastere-ynov/todo-app-cloud/images/account.png)

## DevSecOps Pipeline & Operational Reliability

### Federated CI/CD & Vulnerability Scanning

- **OIDC (OpenID Connect) Federation:** GitHub Actions workflows authenticated against Azure using short-lived tokens without any static API keys or long-lived passwords in repository secrets.
- **Continuous Security Analysis:** Automated container image scans using **Trivy** prior to registry publishing (**Azure ACR**), combined with automated dependency audits via Dependabot.
- **Automated Helm Deployments:** Progressive rollouts powered by Helm charts utilizing **Rolling Update** strategies to achieve seamless Zero-Downtime releases.

### Resilience & Observability

- **Decoupled Kubernetes Probes:** Tuned `readiness` and `liveness` health checks to safely recycle unhealthy pods without user-facing request drops.
- **Load Validation:** Systematic load-testing sessions under **k6** demonstrating **p95 response times < 300 ms** and upholding an SLA exceeding **99.9%**.

## Impact & Key Results

- **99.9% SLA validated** under simulated peak traffic with progressive load distribution.
- **0 static secrets** maintained across the entire CI/CD pipeline and Git repositories.
- **Zero-Downtime deployments:** Version upgrades performed without user disruption.
- **RNCP Level 7 Validation:** Full accreditation awarded for Cloud-Native software design and operational lifecycle management.

---

### Documentation & Resources

The complete technical dossiers submitted for RNCP title defense are available for review:

- [Read evaluation dossier: Design & Software Development (PDF)](/works-and-projects/mastere-ynov/todo-app-cloud/concevoir-et-developper.pdf)
- [Read evaluation dossier: Application Operations & Maintenance (PDF)](/works-and-projects/mastere-ynov/todo-app-cloud/maintien-condition-op.pdf)
- [Explore the source code on GitHub](https://github.com/wanicolas/todo-app-cloud)
