```javascript
//Incorrect usage of $in operator with ObjectId
db.collection('users').find({ _id: { $in: ["651a7d91597a97e11a1e5678", "651a7d91597a97e11a1e5679"] }});
```