import { TimeStampEntity } from 'src/Generic/timestamp.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity extends TimeStampEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'text', nullable: false })
  password: string;
}
