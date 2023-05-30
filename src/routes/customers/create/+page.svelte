<script lang="ts">
  let email: string;
  let name: string;
  let balance: number;
</script>

<form method="POST" action="?/createCustomer">
  <div class="mb-4">
    <label class="d-block" for="email">Email: </label>
    <input bind:value={email} class="border border-black" type='email' id="email" name="email"  />
  </div>
  <div class="mb-4">
    <label class="d-block" for="name">Name: </label>
    <input bind:value={name} class="border border-black" id="name" name="name" />
  </div>
  <div class="mb-4">
    <label class="d-block" for="balance">Balance: </label>
    <input bind:value={balance} class="border border-black" type='number' id="balance" name="balance" />
  </div>
  <!-- {isError && <p style={{ color: 'red' }}>{(error as any)?.message}</p>} -->
  <button>
    Submit
  </button>
</form>