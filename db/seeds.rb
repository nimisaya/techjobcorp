# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Seed data for Users
User.destroy_all

print "Creating users..."

User.create!(
    email: "reece@ga.com",
    password: 'chicken',
    username: 'reece'
)

User.create!(
    email: "lucy@ga.com",
    password: 'chicken',
    username: 'lucy'
)

User.create!(
    email: "brooke@ga.com",
    password: 'chicken',
    username: 'brooke'
)

User.create!(
    email: "manda@ga.com",
    password: 'chicken',
    username: 'manda'
)

puts "Created #{User.count} users."
