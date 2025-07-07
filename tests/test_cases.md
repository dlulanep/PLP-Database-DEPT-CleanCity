# 🧪 CleanCity Test Cases
**Team Name**: QA Commanders (Nosipho Mdakane, Steven Odhiambo, Pathiswa Dlulane)
**Date**: 05 July 2025
**Project**: CleanCity - Waste Pickup Scheduler  
**File**: test-cases.md  

---

## 🔐 Authentication Test Cases

### Test Case ID: TC-AUTH-001  
**Title**: Successful User Registration  
**Related Requirement**: FR-001  
**Preconditions**:
- User is on the registration page
- Browser localStorage is empty

**Test Steps**:
1. Go to `/register`
2. Enter valid email
3. Enter a password (≥ 8 characters)
4. Confirm password
5. Enter full name (2–50 characters)
6. Click "Register"

**Expected Result**:
- User is created and saved in `cleanCity_users`
- User is redirected to login/dashboard

**Actual Result**:  
**Status**:✅  Passed 
**Tested By**: Pathiswa Dlulane

---

### Test Case ID: TC-AUTH-002  
**Title**: Login with Incorrect Password  
**Related Requirement**: FR-005  
**Preconditions**:
- User account exists in localStorage

**Test Steps**:
1. Navigate to `/login`
2. Enter valid email but incorrect password
3. Click "Login"

**Expected Result**:
- Error message shown: "Invalid credentials"
- User remains on login page

**Actual Result**:  
**Status**: ✅ Passed  
**Tested By**: Pathiswa Dlulane

---

## 🗑️ Waste Pickup Scheduling

### Test Case ID: TC-WASTE-001  
**Title**: Schedule General Waste Pickup  
**Related Requirement**: FR-012  
**Preconditions**:
- Logged in as user
- No pickup scheduled today

**Test Steps**:
1. Go to "Request Pickup"
2. Select tomorrow’s date
3. Choose waste type: "General"
4. Quantity: Medium
5. Click "Submit"

**Expected Result**:
- Request saved in `cleanCity_pickupRequests`
- Status: "Pending"

**Actual Result**:  
**Status**:  ✅ Passed 
**Tested By**: Pathiswa Dlulane

---

### Test Case ID: TC-WASTE-002  
**Title**: Prevent Multiple Pickups on Same Date  
**Related Requirement**: FR-015  
**Preconditions**:
- One pickup already scheduled for tomorrow

**Test Steps**:
1. Try scheduling another pickup for the same date

**Expected Result**:
- Error: "Pickup already scheduled for this date"

**Actual Result**:  
**Status**:  Failed  
**Tested By**: Pathiswa Dlulane

---

## 📊 Dashboard & Analytics

### Test Case ID: TC-DASH-001  
**Title**: Display User Dashboard with Metrics  
**Related Requirement**: FR-023  
**Preconditions**:
- User has at least one completed pickup

**Test Steps**:
1. Log in
2. Navigate to `/dashboard`

**Expected Result**:
- Dashboard shows recent requests
- Environmental metrics displayed

**Actual Result**:  
**Status**:  ✅ Passed 
**Tested By**: Pathiswa Dlulane

---

## 📝 Blog & Quiz (Content)

### Test Case ID: TC-BLOG-001  
**Title**: View Blog Posts  
**Related Requirement**: FR-036  
**Preconditions**:
- At least 1 blog post in localStorage

**Test Steps**:
1. Navigate to `/blog`
2. Click on a blog title

**Expected Result**:
- Post details appear with content, author, date

**Actual Result**:  
**Status**: 🟡 Pending  
**Tested By**: [Name]

---

## 👥 Community Feed

### Test Case ID: TC-COM-001  
**Title**: Post in Community Feed  
**Related Requirement**: FR-041  
**Preconditions**:
- User is logged in

**Test Steps**:
1. Go to `/community`
2. Enter message: "Let’s recycle better!"
3. Click "Post"

**Expected Result**:
- Post appears in feed with timestamp and author

**Actual Result**:  
**Status**: 🟡 Pending  
**Tested By**: [Name]

---

## ⚙️ Admin Features

### Test Case ID: TC-ADMIN-001  
**Title**: Admin Views All Pickup Requests  
**Related Requirement**: FR-053  
**Preconditions**:
- Logged in as admin

**Test Steps**:
1. Navigate to `/admin/pickups`

**Expected Result**:
- Table lists all requests from all users

**Actual Result**:  
**Status**: 🟡 Pending  
**Tested By**: [Name]

---

## 🔔 Notification System

### Test Case ID: TC-NOTIF-001  
**Title**: Notification Sent on Pickup Confirmation  
**Related Requirement**: FR-066  
**Preconditions**:
- Admin confirms pickup

**Test Steps**:
1. Confirm a pickup in admin panel
2. Log in as user

**Expected Result**:
- Notification appears in user bell with correct message

**Actual Result**:  
**Status**: 🟡 Pending  
**Tested By**: [Name]

---

## 📱 Responsive Design

### Test Case ID: TC-RESP-001  
**Title**: Mobile View - Navigation Menu  
**Related Requirement**: FR-069  
**Preconditions**:
- View app on mobile resolution (320x768px)

**Test Steps**:
1. Open app in mobile emulator
2. Tap hamburger menu

**Expected Result**:
- Navigation menu appears full-width and accessible

**Actual Result**:  
**Status**: 🟡 Pending  
**Tested By**: [Name]

---

## ♿ Accessibility

### Test Case ID: TC-ACCESS-001  
**Title**: Screen Reader Reads Form Labels  
**Related Requirement**: FR-074  
**Preconditions**:
- Screen reader running

**Test Steps**:
1. Navigate through form fields

**Expected Result**:
- Screen reader reads labels correctly

**Actual Result**:  
**Status**: 🟡 Pending  
**Tested By**: [Name]

---

## 🧪 Notes

- Replace `[Name]` with the team member assigned  
- Update **Actual Result** and **Status** during test execution:  
  ✅ Passed | ❌ Failed | 🟡 Pending  
- Screenshots of failed tests can be linked in final report  
