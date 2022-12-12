import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class HiringSection{
    @PrimaryGeneratedColumn()
        id: number

    @Column()
        jobtitle: string
    
    @Column("text", {array: true})
        requirement: string[] 
}