import { LD_SDK_KEY } from '$env/static/private';
import LaunchDarkly from 'launchdarkly-node-server-sdk'

let launchDarklyClient: LaunchDarkly.LDClient

async function initialize() {
  const client = LaunchDarkly.init(LD_SDK_KEY)
  try {
    await client.waitForInitialization();
  } catch (err) {
    console.log("Failed to Init LD")
  }
  return client
}

async function getClient() {
  if (launchDarklyClient) return launchDarklyClient
  return (launchDarklyClient = await initialize())
}

export async function getFlagValue(key: string) {
  const client = await getClient()
  let flagValue

  const context: LaunchDarkly.LDContext = {
    key: 'anonymous',
  }
  flagValue = await client.variation(key, context, false)
  return flagValue
}
