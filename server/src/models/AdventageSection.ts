import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class AdventageSection{
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        icon: string
        
    @Column()
        title: string
    
    @Column()
        description: string
}