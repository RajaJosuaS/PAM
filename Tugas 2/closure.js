function init() {
  // nama adalah sebuah lokal variabel yang dibuat oleh init
  let nama = "Raja Josua Simanungkalit"

  // displayName() adalah inner function, sebuah closure
  function displayName() {
    /* displayName() mengakses parent scopenya dengan menggunakan variabel yang dideklarasikan pada parent scopenya.*/
    console.log(nama)
  }
  displayName()
}
init()