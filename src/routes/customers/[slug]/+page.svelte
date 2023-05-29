<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
  const {customer} = data;
</script>

<div>
  <p>
    Email: <strong>{customer.email}</strong>
  </p>
  <p>Name: {customer.name}</p>
  <p>Balance: {customer.balance}</p>
  <form method="POST" action="?/deleteCustomer">
    <input value={customer.id} name="id" hidden />
    <button>Delete</button>
  </form>
  <div>
    <a href={`/customers`}>Back to customers</a>
  </div>
</div>