export class Message{

    constructor(
        public content: string,
        public username: string,
        public messageId?: string,
        public UserId?: string
    ){
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.UserId = UserId;

    }
}
