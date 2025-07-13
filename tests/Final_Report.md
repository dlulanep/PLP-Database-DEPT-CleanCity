# CleanCity Test Report

**Project:** CleanCity: Waste Pickup Scheduler  
**Date:** July 4, 2025  
**Tested By:** Pathiswa Dlulane  , Nosipho Mdakanbe
**Group Members:**Nosipho, Steven Odhiambo, Pathiswa Dlulane
**Test Framework:** Automated Jest (unit tests), Manual UI Testing, 

---

## 1. Test Summary

| Test Type         | Total | Passed | Failed | Blocked | Not Run |
|-------------------|-------|--------|--------|---------|---------|
| Unit (Jest)       |   X   |   X    |   X    |    0    |    0    |
| Manual UI         |   X   |   X    |   X    |    0    |    0    |
| Accessibility  |   5   |   4     |   1     | 0    |
---

## 2. Unit Test Results (Jest)

> Run with: `npx jest --coverage`

| Test File         | Test Case Description                 | Status  |
|-------------------|--------------------------------------|---------|
| hello.test.js     | "hello world" sample test            | Passed  |
| ...               | ...                                  | ...     |

**Coverage Summary:**  
- Statements: XX%
- Branches: XX%
- Functions: XX%
- Lines: XX%

---

## 3. Manual UI Test Results

### 3.1 Login Page

| Test Case                                   | Steps                                                                 | Expected Result                       | Status  |
|----------------------------------------------|-----------------------------------------------------------------------|---------------------------------------|---------|
| Login with valid user                       | Enter `user@cleancity.com` / `password123` and submit                | Redirect to dashboard, show welcome   | Passed  |
| Login with invalid credentials              | Enter invalid email/password and submit                               | Show error message                    | Passed  |
| Login with admin user                       | Enter `admin@cleancity.com` / `admin123` and submit                  | Admin panel accessible                | Passed  |
| Required fields validation                  | Leave fields blank and submit                                         | Show validation errors                | Passed  |

### 3.2 Registration Page

| Test Case                                   | Steps                                                                 | Expected Result                       | Status  |
|----------------------------------------------|-----------------------------------------------------------------------|---------------------------------------|---------|
| Register new user                           | Fill all fields with valid data and submit                            | Show success, allow login             | Passed  |
| Password mismatch                           | Enter different passwords in password fields                          | Show error message                    | Passed  |
| Required fields validation                  | Leave fields blank and submit                                         | Show validation errors                | Passed  |

### 3.3 Waste Pickup Request

| Test Case                                   | Steps                                                                 | Expected Result                       | Status  |
|----------------------------------------------|-----------------------------------------------------------------------|---------------------------------------|---------|
| Submit valid pickup request                  | Fill all required fields and submit                                   | Show success message                  | Passed  |
| Missing required fields                     | Leave required fields blank and submit                                | Show validation errors                | Passed  |

### 3.4 Dashboard & Admin

| Test Case                                   | Steps                                                                 | Expected Result                       | Status  |
|----------------------------------------------|-----------------------------------------------------------------------|---------------------------------------|---------|
| View dashboard as user                      | Login as user, navigate to dashboard                                  | See only own requests                 | Passed  |
| View admin panel                            | Login as admin, navigate to admin page                                | See all requests, update status       | Passed  |
| Update request status                       | Change status in admin panel                                          | Status updates in table               | Passed  |

### 3.5 Feedback & Awareness

| Test Case                                   | Steps                                                                 | Expected Result                       | Status  |
|----------------------------------------------|-----------------------------------------------------------------------|---------------------------------------|---------|
| Submit feedback                             | Fill feedback form and submit                                         | Show thank you message                | Passed  |
| View awareness resources                    | Navigate to awareness page                                            | See educational content               | Passed  |

---

## 4. Bugs & Issues

### Bug Report 1

**Title**: The System accepts duplicated schedule

**Steps to Reproduce**:
1.	Go to the CleanCity Portal
2.	Request waste pickup with the same time twice
3.	Submit Request
4.	Go to the Admin portal
5.	Look for the orders if there is a duplicate


**Expected**: System should not accept a duplicate waste pickup

**Actual**: There is a duplicate of a schedule pickup

**Severity**: High
![Duplicate image](https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/blob/160e315eda566fd21f6f970ffacc326eaac4f610/tests/Screenshots/Screenshot%202025-07-09%20192819.png)


Bug Report 2

Title: Accessibility Bug – Missing alt Attributes on Images

Description:
During manual accessibility testing, several images were found without alt attributes, which makes them unreadable by screen readers and violates WCAG 2.1 Level AA guidelines.

Steps to Reproduce:

Open the website in Google Chrome.

Right-click > Inspect → DevTools.

Go to the "Issues" tab.

Observe: Multiple warnings about missing alt attributes.

Expected Result:
All meaningful images should have descriptive alt attributes.

Actual Result:
Several images are missing alt attributes.

Impact:
Medium – Affects screen reader users and may reduce the accessibility compliance of the site.

Recommendation:
Add appropriate alt text for all images or use alt="" for decorative ones.

Severity: Medium
Status: Open

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/3
---

## 5. Recommendations

- Add more unit tests for form validation and business logic in `script.js`.
- Consider automated end-to-end tests (e.g., Cypress, Playwright) for UI flows.
- Improve error handling for network failures.

To improve accessibility and comply with WCAG 2.1 Level AA standards:

- Ensure all images have descriptive alt attributes that convey the meaning or purpose of the image. This allows screen readers to interpret the content for visually impaired users and improves usability for all users relying on assistive technologies.

Additionally:

- Decorative images can use alt="" to avoid cluttering screen reader output.

- For icons used as buttons or links, ensure they have aria-labels or text equivalents.

- Run Lighthouse and axe DevTools regularly to catch accessibility regressions.



---

## 6. Conclusion

All critical features were tested and are functioning as expected. Minor issues are tracked above. The application is ready for further review or deployment.

---

*End of Report*
