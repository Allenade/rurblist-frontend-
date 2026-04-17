import { CreateAgentPayload } from '../models/agent-model';

export function buildAgentPayload(form: any): CreateAgentPayload {
  if (!form.firstName || !form.lastName || !form.nin || !form.selfie || !form.ninSlip) {
    throw new Error('Missing required fields');
  }

  return {
    firstName: form.firstName,
    lastName: form.lastName,
    dateOfBirth: form.dateOfBirth || '',
    city: form.city || '',
    address: form.address || '',
    nationality: form.nationality || '',
    nin: form.nin,
    cacNumber: form.cacNumber,
    companyName: form.companyName || '',
    yearsOfExperience: form.yearsOfExperience || 0,
    description: form.description || '',
    isAgreement: true,

    selfie: form.selfie,
    ninSlip: form.ninSlip,
    cacDoc: form.cacDoc,
  };
}
