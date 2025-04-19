// Satelites form fields - assembles the individual pharmacy sections
import { PA_PHARMACY } from './forms/pa-pharmacy.js';
import { CCCO_PHARMACY } from './forms/ccco-pharmacy.js';
import { UTI_PED_PHARMACY } from './forms/uti-ped-pharmacy.js';
import { UTI_AD_PHARMACY } from './forms/uti-ad-pharmacy.js';
import { CENTRAL_PHARMACY } from './forms/central-pharmacy.js';
import { CRITICAL_PRODUCTS } from './forms/critical-products.js';
import { PENDING_ITEMS } from './forms/pending-items.js';
import { GENERAL_OBSERVATIONS } from './forms/general-observations.js';

export const SATELITES_FORM_FIELDS = `
    ${PA_PHARMACY}
    ${CCCO_PHARMACY}
    ${UTI_PED_PHARMACY}
    ${UTI_AD_PHARMACY}
    ${CENTRAL_PHARMACY}
    ${CRITICAL_PRODUCTS}
    ${PENDING_ITEMS}
    ${GENERAL_OBSERVATIONS}
`;