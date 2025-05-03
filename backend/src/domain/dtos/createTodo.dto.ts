
export class CreateTodoDto {
    constructor(
        public title: string,
        public description: string
    ){}

    static create(object: { [key: string]: any}): [string?, CreateTodoDto?]{
        const {title, description} = object
        if (!title) return ['Missing title']
        if (!description) return ['Missing description']
        return [undefined, new CreateTodoDto(title, description)]
    }
}