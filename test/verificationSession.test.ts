import { strict as assert } from 'node:assert'
import { describe, it } from 'node:test'
import dotenv from 'dotenv'
import Paradym from '../src/client'
dotenv.config()

describe('Verification Session', () => {
  it('should return all issuance sessions', async () => {
    const client = new Paradym({ apiKey: process.env.X_ACCESS_TOKEN as string })
    const verificationSessions = await client.openId4Vc.verification.getAllVerificationSessions({
      projectId: 'clwt6e610000101s69ubga6lk',
    })

    assert.ok(verificationSessions)
    assert.ok(Array.isArray(verificationSessions.data))
  })
})
