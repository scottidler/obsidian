# Epics Summary 2023
# Willis' Epics

This group seems to focus on deployment processes and tracking, along with improving the visibility and management of engineering events. The inclusion of a specific error page project suggests a focus on user experience as well.

### 6 Epics

- Engineering Events Timeline
- Deployments Timeline
- Tatari Fail Whale Error Page
- Deployments Github App with Postbacks to PR
- Deployments v2
- Create Deployments Tracking Service

# Supporting Other Teams

This theme indicates a strong collaboration with other teams, providing infrastructure support and specialized services like media planning, data hosting, and system synchronization. The projects show a balance between technical infrastructure and application-level support.

### 9 Epics

- DCR Infra Cleanup
- DCR Infra Build for Milestone 1
- DCR Infra
- Productionalize TaskQueues v2
- Create infra for Media Planning Service microservice
- Deploy Intranet replacement: Simpplr
- Typed Interface Sync Between FE and BE
- ML Model Versioning and Hosting
- Productionalize Managed/Self-Hosted ClickHouse OLAP DB

# GHA and Github-Related Epics

This theme is centered around optimizing the use of GitHub Actions and improving continuous deployment (CD) processes. It suggests efforts to enhance automation, reliability, and integration with GitHub features.

### 3 Epics

- Move CD Test Execution to Hosted GHA Runners
- Deployments Github App with Postbacks to PR
- Stabilize GitHub Actions Self-Hosted Runners

# Lambda-Related Epics

The focus here is on AWS Lambda, indicating a commitment to serverless architecture. The projects range from standardization of code and monitoring to creating Docker images and handling secrets, demonstrating a comprehensive approach to Lambda functions.

### 3 Epics

- Standardize Code/Monitors/Infrastructure of Lambda Ingestion Pipelines
- Create Base Docker Images for use with Lambda
- External Secrets for Lambda Jobs

# Ongoing Tech Debt

This theme captures the ongoing efforts to modernize and optimize the tech stack. It includes a range of activities from system upgrades to process improvements, indicating a proactive approach to maintaining and enhancing the technical infrastructure.

### 14 Epics

- Rework Helm Upgrade Flow for Upstream Charts
- Upgrade Istio to v1.17
- Upgrade All k8s Clusters to 1.25
- Upgrade All k8s Clusters to 1.24
- Upgrade All Python Package Repos to Poetry
- Upgrade all EKS clusters to 1.24
- Upgrade Python to 3.8
- Reorganize our Terraform into Focused Repos
- Productionalize Metrics and Logging
- Migrate K8s Services from helm-charts to gitops-infra
- Follow-on Work Post Vault k8s Move
- Migrate EC2 Vault Clusters to Kubernetes
- Standardize on Poetry Python Dependency Manager
- Move Vault Clusters to Kubernetes
- Philo App Tuning
- Migrate Svcs from EBS -> RDS

# Cost Metrics Theme

This theme is focused on financial efficiency, with projects aimed at predicting costs and improving the reporting of cost metrics. It highlights a strategic approach to managing and optimizing costs in the technical domain.

### 2 Epics

- Cost Metrics Prediction & Alerting
- Cost Metrics Reporting

# Misc Theme

The miscellaneous theme includes a variety of projects that don't fit neatly into the other categories but are crucial for specific operational or organizational needs. These projects range from decommissioning old systems to integrating organizational tools and optimizing job processing.

### 3 Epics

- Decom Livy-Spark
- Integrate Org Chart with Workday
- Airflow Job Namespacing