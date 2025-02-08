```javascript
const { ObjectId } = require('mongodb');

// Correct usage of $in operator with ObjectId
db.collection('users').find({ _id: { $in: [new ObjectId("651a7d91597a97e11a1e5678"), new ObjectId("651a7d91597a97e11a1e5679")] }});
```