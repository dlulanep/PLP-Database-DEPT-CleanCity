# 10 Potential Test Defects in CleanCity UI Pages and Forms

1. **[Login] No error message for invalid email format**
   - The login form may not display a specific error if the email format is invalid (e.g., missing "@" or domain).

2. **[Register] Password length validation is weak**
   - The registration form only requires a minimum of 3 characters for passwords, which is insecure.

3. **[Register] No check for duplicate email registration**
   - Users can register with an email that already exists, leading to possible account conflicts.

4. **[Pickup Request] Required fields not validated on submit**
   - Submitting the pickup form with empty required fields may not trigger visible error messages for each field.

5. **[Pickup Request] Waste type radio buttons allow no selection**
   - If the user does not select a waste type, the form may submit without validation, or the error message is not shown.

6. **[Dashboard] Filters do not reset table correctly**
   - Changing filters on the dashboard may not update the table as expected, or "all" does not reset the view.

7. **[Feedback] Request ID field accepts invalid or non-existent IDs**
   - The feedback form does not validate if the entered Request ID actually exists in the system.

8. **[Admin Panel] Update Status button enabled without valid selection**
   - The "Update Status" button can be enabled even if no request or status is selected, leading to errors.

9. **[Navigation] Hamburger menu does not close after selection on mobile**
   - On mobile, selecting a menu item does not close the hamburger menu, causing navigation confusion.

10. **[Accessibility] Missing ARIA labels and insufficient color contrast**
    - Some form controls and navigation elements lack ARIA labels, and color contrast may not meet accessibility standards.

---

*Note: These defects are based on a review of the HTML structure and common UI/UX issues. Actual defects should be confirmed through manual and automated testing.*