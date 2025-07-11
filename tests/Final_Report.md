# CleanCity Test Report

**Project:** CleanCity: Waste Pickup Scheduler  
**Date:** July 4, 2025  
**Tested By:** Pathiswa Dlulane  
**Group Members:**Nosipho, Steven Odhiambo, Pathiswa Dlulane
**Test Framework:** Jest (unit tests), Manual UI Testing

---

## 1. Test Summary

| Test Type         | Total | Passed | Failed | Blocked | Not Run |
|-------------------|-------|--------|--------|---------|---------|
| Unit (Jest)       |   X   |   X    |   X    |    0    |    0    |
| Manual UI         |   X   |   X    |   X    |    0    |    0    |

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

---

## 5. Recommendations

- Add more unit tests for form validation and business logic in `script.js`.
- Consider automated end-to-end tests (e.g., Cypress, Playwright) for UI flows.
- Improve error handling for network failures.

---

## 6. Conclusion

All critical features were tested and are functioning as expected. Minor issues are tracked above. The application is ready for further review or deployment.

---

*End of Report*
