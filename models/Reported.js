class Reported {
    constructor(id, comment_id) {
        this.id = id;
        this.comment_id = comment_id;
}

getId() {
        return this.id;
    }
getcomment_id() {
        return this.comment_id;
    }
}
module.exports = Comment;