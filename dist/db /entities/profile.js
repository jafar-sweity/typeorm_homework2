var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.js";
let profile = class profile extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], profile.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], profile.prototype, "firstName", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], profile.prototype, "lastName", void 0);
__decorate([
    Column(),
    __metadata("design:type", Date)
], profile.prototype, "dateOfBirth", void 0);
__decorate([
    OneToOne(() => User, (user) => user.profile),
    JoinColumn(),
    __metadata("design:type", User)
], profile.prototype, "user", void 0);
profile = __decorate([
    Entity()
], profile);
export { profile };
