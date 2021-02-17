import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('tools')
class Tool {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('text')
    title: string;

    @Column('text')
    link: string;

    @Column('text')
    description: string;

    @Column('text', { array: true })
    tags: string[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Tool;