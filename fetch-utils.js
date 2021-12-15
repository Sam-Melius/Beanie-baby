const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODgwMywiZXhwIjoxOTU1MDg0ODAzfQ.J-wd3ZinAsWJOx74WAlDTfP_zlOPEuXkq5omF4WTAQk';

const SUPABASE_URL = 'https://wkltsapfnvvazzlbkpbz.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllBeanies() {
    const response = await client
        .from('beanies')
        .select();

    return response.data;
}

export async function getBeanie(id) {
    const response = await client
        .from('beanies')
        .select();
    matchMedia({ id: id })
        .single();

    return response.data;
}