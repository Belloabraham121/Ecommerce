import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skPlfDdEZ4FApMTuOLa8NQbnGC14NOnEntY3XkTRIekZLxKLrzT8il57njmWk25zCPz7jEXgsbPMpgZE2tm9r8E7BgOAIxjzGmVm7syzAXvP2AfVRopEfvnM0UgoKdAzsvygsgxIJYTofyxlgkoAE45VDSZBhz7YPTOJKcl2XJ3wUn3FBtKg",
})
