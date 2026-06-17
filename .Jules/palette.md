## 2024-05-24 - Added Confirmation Dialog for Delete
**Learning:** The CLI lacked a confirmation for destructive operations, making accidental data loss very easy. Users often hit the wrong key in a CLI menu.
**Action:** Always prompt the user before performing destructive DB operations like `DELETE` or `DROP`.
