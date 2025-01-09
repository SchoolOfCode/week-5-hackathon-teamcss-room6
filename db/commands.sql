
      DROP TABLE IF EXISTS user CASCADE;
      DROP TABLE IF EXISTS entries CASCADE;
    

    
      CREATE TABLE user (
        user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(225) NOT NULL,
        date_joined DATE NOT NULL
      

    
      CREATE TABLE entries (
        entry id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        user_id INT REFERENCES user(user_id),
        journal_entry VARCHAR(5000) NOT NULL,
        date_added DATE NOT NULL,
        time_added TIMESTAMP NOT NULL
        
      
    
  INSERT INTO user (first_name, last_name, email, password, date_joined)
  VALUES 
    ('Emma', 'Johnson', 'emma.johnson@example.com', 'P@ssword123', '2024-03-15'),
    ('Liam', 'Brown', 'liam.brown@example.com', 'Li@mB2024!', '2024-07-23'),
    ('Olivia', 'Davis', 'olivia.davis@example.com', 'Ol!v1a2023$', '2023-12-10'),
    ('Noah', 'Garcia', 'noah.garcia@example.com', 'N0ah@G1234', '2024-09-05'),
    ('Sophia', 'Martinez', 'sophia.martinez@example.com', 'Soph!@2023', '2024-01-02'),


  INSERT INTO entries (user_id, journal_entry, date_added, time_added)
  VALUES 
  (1, 'Started a new project at work today, feeling excited!', '2024-03-15', '10:30:45'),
  (1, 'Had a productive meeting with the team.', '2024-03-16', '14:20:10'),  
  (1, 'Took a long walk in the park after work.', '2024-03-17', '18:45:32'), 
  (2, 'Finally finished reading that book on leadership!', '2024-07-23', '09:15:00'),
  (2, 'Had a great workout at the gym this morning.', '2024-07-24', '07:45:21'),
  (2, 'Tried a new recipe for dinner – turned out amazing!', '2024-07-25', '19:30:00'),
  (3, 'Visited the art gallery downtown – inspiring pieces!', '2023-12-10', '11:05:45'),
  (3, 'Enjoyed coffee with an old friend after months.', '2023-12-11', '16:20:11'),
  (3, 'Finished a challenging puzzle with the family.', '2023-12-12', '20:50:55'),
  (4, 'Caught up on emails and got through my to-do list.', '2024-09-05', '08:45:30'),
  (4, 'Went for a jog by the lake – felt so refreshing!', '2024-09-06', '06:30:15'),
  (4, 'Watched a documentary on space exploration.', '2024-09-07', '21:15:10'),
  (5, 'Started learning a new language – very rewarding!', '2024-01-02', '10:00:00'),
  (5, 'Tried yoga for the first time – surprisingly relaxing.', '2024-01-03', '08:20:00'),
  (5, 'Wrote in my journal about plans for the year.', '2024-01-04', '21:00:30')

await resetDatabase();
