## Summary

<!-- What does this PR change and why? -->

---

## Development Checklist

### Plan
- [ ] Scope of changes is clear and agreed with the user
- [ ] All affected files identified before coding started

### Build
- [ ] Changes made on `claudedev` (not directly on `main`)
- [ ] `npm run build` passes with no errors

### Test
- [ ] `npm test` passes — all Playwright tests green
- [ ] Hardcoded content counts in `tests/portfolio.spec.ts` updated if needed

### Push
- [ ] Only relevant files staged (no accidental `node_modules`, `.env`, or build artifacts)
- [ ] Commit messages follow `type: description` convention
- [ ] PR targets `main` (or `development` for integration work)
