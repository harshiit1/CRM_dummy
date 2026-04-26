export interface IUserRegister {
  UserId: number;
  EmpCode: number;
  UserName: string;
  Email: string;
  PasswordHash: string;
  IsActive: boolean;
  CreatedOn: Date;
  ModifiedOn: Date;
}
export interface IUserLogin {
  UserName: string;
  Password: string;
}
