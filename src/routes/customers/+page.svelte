<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
  const {customers} = data;

  let loading = false;
</script>

<a href="/customers/create">Create customer</a>

<div class="mt-8">
  {#each customers as customer}
    <div>
      <div>
        <p>
          Email: <strong>{customer.email}</strong>
        </p>
        <p>Name: {customer.name}</p>
        <p>Balance: {customer.balance}</p>
        <div class="mt-4">
          <a href={`/customers/${customer.id}`}>View</a>
          <form method="POST" action="?/deleteCustomer"
          on:submit={() => {
            loading = true;
          }}
          >
            <input value={customer.id} name="id" hidden />
            <button>{loading ? "Loading..." : "Delete"} </button>
          </form>
        </div>
        <hr />
      </div>
    </div>
  {/each}
</div>
