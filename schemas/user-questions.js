const userQuestion = {
   id: String,
   userId: String,
   questionId: String,
   userAnswerId: String, // the answer this user selected
   userAnsweredAt: Number, // timestamp of when the user answered the question
   assignedAt: Number, // timestamp of when it was assigned
   assignedByUserId: String // the id of the user that assigned the question
 }