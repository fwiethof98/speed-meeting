# Generated by Django 3.1.2 on 2021-01-19 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(blank=True, null=True)),
                ('moderatorPW', models.TextField(blank=True, null=True)),
                ('name', models.TextField(blank=True, null=True)),
                ('meetingID', models.TextField(blank=True, null=True)),
                ('rooms', models.ManyToManyField(to='event.Room')),
            ],
        ),
    ]
