import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  fullName: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 20 })
  phone: string;

  @CreateDateColumn({ type: "date" })
  registeredAt: string;

  @ManyToOne(() => User, (u) => u.contacts, {
    onDelete: "CASCADE",
  })
  user: User;
}
