import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Carousel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    link: string
}