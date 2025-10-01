/**
 Input object for CreateTenantDto
 */
export interface CreateTenantDto {
  /** name input field */
  name: string;
  /** tenant input field */
  tenant: string;
  /** default input field */
  default: boolean;
  /** email input field */
  email: string;
}