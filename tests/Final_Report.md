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
| Accessibility     |   5   |   4     |   1     | 0    |
| Manual UI         |  4   |   2  |   2  |  0   |   0    
  |
--- 

## 2. Unit Test Results (Jest)

> Run with: `npx jest --coverage`

| Test File         | Test Case Description                 | Status  |
|-------------------|--------------------------------------|---------|
| Validation.js     | Testing the validation form          | Passed  |
| Confirm_pickup.js | Testing confirm pickup sample        | Passed  |

### 📊 Coverage Summary
Statements: 20%

Branches: 10%

Functions: 70%

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

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/1


Bug Report 2

**Title**: Accessibility Bug – Missing alt Attributes on Images

**Description**:
During manual accessibility testing, several images were found without alt attributes, which makes them unreadable by screen readers and violates WCAG 2.1 Level AA guidelines.

**Steps to Reproduce**:

Open the website in Google Chrome.

Right-click > Inspect → DevTools.

Go to the "Issues" tab.

**Observe**: Multiple warnings about missing alt attributes.

**Expected Result**:
All meaningful images should have descriptive alt attributes.

**Actual Result**:
Several images are missing alt attributes.

**Severity**:
Medium – Affects screen reader users and may reduce the accessibility compliance of the site.

Recommendation:
Add appropriate alt text for all images or use alt="" for decorative ones.

Severity: Medium
Status: Open

![Image Alt]( https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/blob/main/tests/Screenshots/Image_%20Alt.PNG)

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/3


Bug Report 3

**Title**: Functional Bug – Form Accepts Past and Blank Dates

**Description**:
During manual UI testing on the Netlify-deployed form, it was found that the system allows users to submit a form with either:

A date in the past (e.g., 30/06/2025)

No date input at all (blank date field)

This undermines the expected validation behavior, especially when future dates are required for the form's purpose (e.g., scheduling or planning).

**Steps to Reproduce**:

Open the form in any modern browser (e.g., Google Chrome).

Scroll to the date input field.

Enter a past date (e.g., 01/07/2025) or leave the field blank.

Click the Submit button.

**Expected Result**:

The form should prevent submission and display a validation error when the date is in the past or when left empty.

**Actual Result**:

The form accepts both past dates and blank fields, allowing incomplete or invalid data to be submitted.

**Severity**:
Medium – This can lead to incorrect data records and scheduling conflicts.

Status:
Open

![Form Validation](https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/blob/main/tests/Screenshots/Form_Validation%20_Testing_Date.PNG)

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/4


# 🐞 Bug Report 4

## Title  
**Dashboard filter by 'Eldoret' does not return results**

## 📝 Steps to Reproduce

1. Go to the **Dashboard**  
2. Filter requests by location **"Eldoret"**  
3. Observe the results

---

## ✅ Expected Behavior

Requests from **"Eldoret"** should be displayed if data exists for that location.

## ❌ Actual Behavior

No results are shown, even though data for **"Eldoret"** exists in the system.

## 🔥 Severity

**High**
![Alt Image](https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/blob/7014514b47065cbc9be1204ba54e41c643464ad9/tests/Screenshots/Eldoret_screenshot.png)

Issue Link:https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/5#issue-3227561216


# 🐞 Bug Report 5

## Title  
**Admin status update does not refresh dashboard**


## 📝 Steps to Reproduce

1. Log in as **Admin**  
2. Change the **status** of a request  
3. Observe the **dashboard**

## ✅ Expected Behavior

The dashboard should **update immediately** to reflect the **new status** after the change.


## ❌ Actual Behavior

The dashboard does **not update** until it is **manually refreshed**.

## 🔥 Severity
**High**

![Alt image](https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/blob/015c3973396a3917492695a3dde378943f5b055d/tests/Screenshots/Admin_screenshot.png)

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/6#issue-3227600795

### 🐞 Bug Report 6
No validation for special characters in name fields

#### 📝 Steps to Reproduce

1. Go to **Registration** or **Pickup Request** form  
2. Enter special characters (e.g., `@#$%`) in the **name fields**  
3. Submit the form


#### ✅ Expected Behavior

The system should **reject names** that contain **special characters** and display a validation error.


#### ❌ Actual Behavior

The system **accepts special characters** in the name fields without any validation errors.


#### 🔥 Severity

**Medium**

![](https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/blob/508fb35f79e699d9bd8c3d3345500020dbd63ca2/tests/Screenshots/Pickup_Name.png)

Issue link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/7#issue-3227674783

### 🐞 Bug Report 7
Password field accepts less than 6 characters

#### 📝 Steps to Reproduce

1. Go to the **Registration** page  
2. Enter a password with **fewer than 6 characters**  
3. Submit the form

#### ✅ Expected Behavior

The system should **enforce a minimum password length** (e.g., 6 characters) and prevent submission if the requirement is not met.


#### ❌ Actual Behavior

Registration **succeeds** even with a password that is **too short**.

#### 🔥 Severity
**Medium**

![](https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/blob/1f4d4de4b558b9fcf9afd767afaa778da52765ec/tests/Screenshots/Password_Screenshot.png)

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/8#issue-3227689541

### 🐞 Bug Report 8
Feedback form accepts invalid Request IDs

#### 📝 Steps to Reproduce

1. Go to the **Feedback** form  
2. Enter an **invalid Request ID** (e.g., `"ABC123"`)  
3. Submit the form

#### ✅ Expected Behavior

The system should **validate the Request ID** and **reject invalid** ones with an appropriate error message.

#### ❌ Actual Behavior

The system **accepts feedback** even when the **Request ID is invalid**.

#### 🔥 Severity

**Medium**

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/9#issue-3227801817


### 🐞 Bug Report 9
XSS vulnerability in feedback/comments fields

#### 📝 Steps to Reproduce

1. Enter `<script>alert(1)</script>` in the **feedback/comments** field  
2. Submit the form  
3. View the submitted feedback as **Admin** or on the **Dashboard**


#### ✅ Expected Behavior

The input should be **sanitized**, and **script tags should not execute** under any circumstances.

#### ❌ Actual Behavior

The **script executes**, creating a **cross-site scripting (XSS)** vulnerability and a **security risk**.

#### 🔥 Severity

**High**

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/10#issue-3227848101

### 🐞 Bug Report 10
No error message for invalid login credentials

#### 📝 Steps to Reproduce

1. Go to the **Login** page  
2. Enter **incorrect credentials**  
3. Submit the form

#### ✅ Expected Behavior

The user should see a **clear error message** indicating that the **login credentials are invalid**.

#### ❌ Actual Behavior

The page simply **reloads without any feedback**, leaving the user unsure of what went wrong.

#### 🔥 Severity

**Medium**

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/11#issue-3228238828


### 🐞 Bug Report 11
Tab order skips key form fields

#### 📝 Steps to Reproduce

1. Open any form (e.g., **Registration**, **Pickup Request**)  
2. Use the **Tab** key to navigate through the form fields
3. 
#### ✅ Expected Behavior

The **tab order** should follow a **logical sequence**, moving through all fields in the correct order.

#### ❌ Actual Behavior

Some fields are **skipped** or appear **out of sequence**, affecting keyboard navigation and accessibility.

#### 🔥 Severity
**Low**

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/12#issue-3228249013

### 🐞 Bug Report 12
Color contrast fails accessibility standards

#### 📝 Steps to Reproduce

1. Open the app on any page  
2. Use an accessibility tool such as **axe** or **WAVE** to inspect color contrast

#### ✅ Expected Behavior

All text should meet **WCAG AA** contrast ratio requirements for readability and accessibility.

#### ❌ Actual Behavior

Some **text/background combinations** fail the required contrast ratio, making content harder to read for users with visual impairments.


#### 🔥 Severity
**Low**

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/13#issue-3228259928

### 🐞 Bug Report 13
No confirmation dialog before deleting a request

#### 📝 Steps to Reproduce

1. Log in as **Admin**  
2. **Delete a request**

#### ✅ Expected Behavior

The system should prompt the user with a **confirmation dialog** before permanently deleting a request.

#### ❌ Actual Behavior

The request is **deleted immediately** without any warning or confirmation prompt.

#### 🔥 Severity
**Medium**

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/14#issue-3228266906

### 🐞 Bug Report 14
LocalStorage not cleared on logout

#### 📝 Steps to Reproduce

1. Log in and perform some actions  
2. Log out of the application  
3. Check the browser's **localStorage**
   
#### ✅ Expected Behavior

All user and request data should be **cleared from localStorage** upon logout to maintain privacy and security.

#### ❌ Actual Behavior

Sensitive data **remains in localStorage** after logout, posing a potential security and privacy risk.

#### 🔥 Severity
**Medium**

Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/15#issue-3228272646


### 🐞 Bug Report 15
Responsive layout breaks on iPhone SE

#### 📝 Steps to Reproduce

1. Open the app on an **iPhone SE** or simulate it using browser **DevTools**  
2. Navigate to any page that contains **cards** or **grids**


#### ✅ Expected Behavior

The layout should **adapt to small screen sizes**, keeping all content **readable and properly aligned**.

#### ❌ Actual Behavior

Cards **overflow** or **overlap**, breaking the layout on small screens like the iPhone SE.


#### 🔥 Severity
**Low**

Isue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/16#issue-3228288659


### 🐞 Bug Report 16
No feedback if network is offline

#### 📝 Steps to Reproduce

1. **Disconnect** your network connection  
2. Attempt to **submit any form** in the application

#### ✅ Expected Behavior

The system should display an **error message** or **offline warning**, informing the user that the submission failed due to network issues.

#### ❌ Actual Behavior

No feedback is shown, and the form appears to **submit successfully**, even though the network is offline.

#### 🔥 Severity

**Low**
Issue Link: https://github.com/dlulanep/PLP-Database-DEPT-CleanCity/issues/17#issue-3228299201

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

- Add client-side and server-side validation to ensure the date field:

- Does not accept dates earlier than the current date.

- Is marked as a required field.

- Consider using HTML5 attributes like required and min on the date input, backed by logic validation in JavaScript or backend code.

---

## 6. Conclusion

All critical features were tested and are functioning as expected. Minor issues are tracked above. The application is ready for further review or deployment.

---

*End of Report*
