const rules = {
    "rules": {
        ".read": "true",
        "users": {
            "$user": {
                ".write": "newData.exists() || data.child('uid').val() == auth.uid",
                ".validate": "newData.hasChildren(['displayName', 'photoURL])"
            }
        },
        "messages": {
            "$message": {
                ".write": "newData.exists() || data.child('uid').val() == auth.uid || root.child('admins').child(auth.uid).val() == true",
                ".validate": "newData.hasChildren(['content', 'timestamp', 'uid'])"
            }
        }
    }
}