
export class UpdateTodoDto {
    constructor(
        public title?: string,
        public isCompleted?: boolean,
        public isImportant?: boolean,
    ){}

    static create(object: {[key:string]: any}): [string?, UpdateTodoDto?]{
        const {title, isCompleted, isImportant} = object
        
        return[undefined, new UpdateTodoDto(title, isCompleted, isImportant)]     
    }
    
}