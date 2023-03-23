export function getCyId(name) {
  return cy.get(`[data-cy="${name}"]`);
}
