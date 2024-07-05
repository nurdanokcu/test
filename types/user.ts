export interface TypeUser {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string | null;
  last_login?: string;
  role: string;
  created_at: string;
  updated_at?: string;
  deleted_at?: string | null;
  position: string | null;
  profile_photo_path?: string | null;
  profile_photo_url?: string | null;
}

export interface GroupedUsers {
  role: string;
  users: TypeUser[];
}
