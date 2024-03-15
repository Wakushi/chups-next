const { db } = require("@vercel/postgres")
const { bookings, shows } = require("../lib/placeholder-data.js")

async function seedBookings(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "bookings" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS bookings (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      adultPrice INT NOT NULL,
      childPrice INT NOT NULL,
      date DATE NOT NULL,
      image VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      locationUrl VARCHAR(255) NOT NULL,
      time VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL
    );
  `

    console.log(`Created "bookings" table`)

    // Insert data into the "bookings" table
    const insertedBookings = await Promise.all(
      bookings.map(
        (booking) => client.sql`
          INSERT INTO bookings (adultPrice, childPrice, date, image, location, locationUrl, time, title)
          VALUES (${booking.adultPrice}, ${booking.childPrice}, ${booking.date}, ${booking.image}, ${booking.location}, ${booking.locationUrl}, ${booking.time}, ${booking.title})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    )

    console.log(`Seeded ${insertedBookings.length} bookings`)

    return {
      createTable,
      bookings: insertedBookings,
    }
  } catch (error) {
    console.error("Error seeding bookings:", error)
    throw error
  }
}

async function seedShows(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "shows" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS shows (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      description VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      year INT NOT NULL
    );
  `

    console.log(`Created "shows" table`)

    // Insert data into the "shows" table
    const insertedShows = await Promise.all(
      shows.map(
        (show) => client.sql`
          INSERT INTO shows (description, image, title, year)
          VALUES (${show.description}, ${show.image}, ${show.title}, ${show.year})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    )

    console.log(`Seeded ${insertedShows.length} shows`)

    return {
      createTable,
      shows: insertedShows,
    }
  } catch (error) {
    console.error("Error seeding shows:", error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedShows(client)

  await client.end()
}

main().catch((err) => {
  console.error("An error occurred while attempting to seed the database:", err)
})
