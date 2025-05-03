
export class UpdateTodoDto {
    constructor(
        public title?: string,
        public description?: string,
        public isCompleted?: boolean,
    ){}

    static create(object: {[key:string]: any}): [string?, UpdateTodoDto?]{
        const {title, description, isCompleted} = object
        
        return[undefined, new UpdateTodoDto(title, description, isCompleted)]     
    }
    
}