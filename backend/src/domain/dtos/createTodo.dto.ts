
export class CreateTodoDto {
    constructor(
        public title: string,
    ){}

    static create(object: { [key: string]: any}): [string?, CreateTodoDto?]{
        const {title} = object
        if (!title) return ['Missing title']
        return [undefined, new CreateTodoDto(title)]
    }
}