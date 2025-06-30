
export async function useDocsIndex() {
  const { data, error } = await useFetch('/api/md/data')
  return {
    docsData: data,
    error
  }
}
