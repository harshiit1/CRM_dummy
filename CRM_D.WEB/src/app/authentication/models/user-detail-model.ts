export interface IUserDetail {
  userId: number;
  userName: string;
  empCode: number;
  empName: string | null;
  designation: string | null;
  department: string | null;
  fullName: string | null;
  contactNo: string | null;
  homePh: string | null;
  email: string | null;
  working: boolean;
  isFirstLogin: boolean;
  createdOn: Date;
}
