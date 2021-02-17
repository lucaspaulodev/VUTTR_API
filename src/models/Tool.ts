import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('tools')
class Tool {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column('varchar')
    title: string;

    @Column('varchar')
    link: string;

    @Column('varchar')
    description: string;

    @Column('text', { array: true })
    tags: string[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Tool;