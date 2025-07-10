<!-- Add after the existing #admin-page section -->
<div id="admin-pickups-page" class="page" style="display: none;">
    <h1 class="page-title">Admin: All Pickups</h1>
    <div class="card">
        <h2>All Scheduled Pickups</h2>
        <p>View and manage all scheduled pickups here.</p>
    </div>
    <div class="card">
        <div style="overflow-x: auto;">
            <table class="table" id="admin-pickups-table">
                <thead>
                    <tr>
                        <th>Request ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Waste Type</th>
                        <th>Preferred Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Data will be populated by JavaScript -->
                </tbody>
            </table>
        </div>
    </div>
</div>