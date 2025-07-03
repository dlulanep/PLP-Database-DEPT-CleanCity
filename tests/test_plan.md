# CleanCity Test Plan

## 1. Overview
- **Project:** CleanCity - Waste Pickup Scheduler
- **Scope:** End-to-end testing of all web application features, including UI, workflow, accessibility, security, and performance.
- **Team:** Nosipho Mdakane, Steven Odhiambo, Pathiswa Dlulane
- **Tools:** Manual testing, React Testing Library (Jest), browser DevTools, accessibility tools (axe, WAVE), Jira or GitHub Kanban

---

## 2. Objectives
- Validate all functional requirements
- Identify and document at least 10 defects (critical, major, medium, minor/cosmetic)
- Ensure accessibility (WCAG 2.1 AA)
- Verify cross-browser and cross-device compatibility
- Assess security and data protection
- Evaluate performance and usability

---

## 3. Scope

### In Scope
- User registration, login, and authentication
- Waste pickup request workflow
- Dashboard: filtering, sorting, status tracking
- Feedback form: validation and submission
- Awareness page: content and accessibility
- Admin panel: request management and statistics
- Data persistence (localStorage)
- Navigation and routing
- Responsive design (desktop, tablet, mobile)
- Accessibility (screen readers, keyboard navigation)
- Security (input validation, XSS, data exposure)
- Performance (load times, responsiveness)

### Out of Scope
- Backend/API testing
- Payment processing
- Third-party integrations (unless specified)

---

## 4. Test Strategy

### Test Types
- **Functional:** Positive/negative cases for all user flows, form validation, dashboard/admin actions
- **Non-Functional:** Performance, usability, accessibility, security
- **Compatibility:** Chrome, Firefox, Safari, Edge; desktop, tablet, mobile
- **Boundary/Edge Cases:** Input limits, special characters, invalid dates, storage limits
- **Regression:** After bug fixes and major changes
- **Automation (Bonus):** Automated smoke tests for critical flows

### Test Design
- Test cases for each requirement/user story
- Use provided and edge test data
- Checklists for UI, accessibility, browser/device coverage
- Defect logging in Jira

### Test Execution
- Manual walkthrough of all features
- Automated tests 
- Daily progress updates
- Evidence: screenshots, videos, logs

---

## 5. Test Environment
- **Browsers:** Latest Chrome, Firefox, Safari, Edge
- **Devices:** Desktop, iPhone, iPad, Android
- **Network:** Fast/Slow 3G, offline (simulated with DevTools)
- **Storage:** Test with full and cleared localStorage

---

## 6. Resources
- **QA Team:** 3 QA Specialists (Nosipho Mdakane, Steven Odhiambo, Pathiswa Dhulane)
- **Developers:** For defect resolution and clarifications
- **Test Devices:** Laptops, smartphones (iOS/Android), tablets
- **Software:** Browsers, accessibility tools, Jira/GitHub, screen recording tools
- **Documentation:** Functional requirements, technical specs, test data

---

## 7. Schedule

| Activity                | Start Date | End Date   | Responsible         |
|-------------------------|------------|------------|---------------------|
| Test Planning           | 2025-06-26 | 2025-07-02 | QA Team             |
| Test Case Design        | 2025-07-04 | 2025-07-06 | QA Team             |
| Test Environment Setup  | 2025-07-04 | 2025-07-05 | QA Team             |
| Test Execution          | 2025-07-06 | 2025-07-12 | QA Team             |
| Defect Reporting        | 2025-07-06 | 2025-07-12 | QA Team             |
| Regression Testing      | 2025-07-10 | 2025-07-13 | QA Team             |
| Test Closure/Reporting  | 2025-07-13 | 2025-07-14 | QA Team             |
| Video Presentation      | 2025-07-14 | 2025-07-15 | QA Team             |


---

## 8. Entry and Exit Criteria

### Entry Criteria
- Functional requirements and UI are finalized and available
- Test environment is set up and accessible
- Test data is prepared
- All required tools and resources are available

### Exit Criteria
- All planned test cases have been executed
- All critical and major defects are resolved or documented with workarounds
- At least 15 defects have been reported and tracked
- Test summary report is completed and submitted
- All deliverables (evidence, logs, video) are ready for submission

---

## 9. Risk Analysis

| Risk                                      | Likelihood | Impact  | Mitigation/Action                         |
|-------------------------------------------|------------|---------|-------------------------------------------|
| Incomplete requirements                   | Medium     | High    | Frequent communication with developers    |
| Limited device/browser access             | Low        | Medium  | Use emulators and cross-browser tools     |
| Tight deadlines                           | Medium     | High    | Prioritize critical test cases            |
| Unresolved critical defects               | Medium     | High    | Early defect reporting and follow-up      |
| Data loss/corruption in localStorage      | Low        | Medium  | Backup and restore test data regularly    |
| Team member unavailability                | Low        | Medium  | Cross-training and shared responsibilities|
| Accessibility issues overlooked           | Medium     | Medium  | Use automated and manual accessibility checks |

---

## 10. Deliverables
- Test Plan & Strategy (this file)
- Test Cases & Checklists (`test_cases.md`)
- Defect/Issue Log (`defect_log.md`)
- Test Report (`final_report.md`)
- Screenshots & Evidence
- Jira/GitHub Kanban Export
- 5-Minute Video Presentation

---

## 11. Sample Test Scenarios

### Registration
- Valid/invalid email, password, name
- Password mismatch, short password, duplicate email

### Login
- Valid/invalid credentials

### Pickup Request
- Missing required fields, invalid date, long/short names
- Valid/invalid waste type, location

### Dashboard
- Filter by status/location, verify results
- Edge case: filter by "Eldoret" (intentional bug)

### Feedback
- Invalid Request ID, valid/invalid reasons

### Awareness
- Screen reader on images (intentional missing alt-text)
- Keyboard navigation

### Admin
- Update status, verify UI refresh (intentional bug)
- Statistics update

### Security
- XSS payloads in all input fields

### Performance
- Large dataset in localStorage
- Slow network simulation

### Accessibility
- No alt text, missing ARIA, color contrast, tab order

---

## 12. References
- Functional Requirements
- Test Data
- Technical Specs
- Jira Setup Guide
- Submission Guidelines
- Video Presentation Guidelines
- FAQ

---
