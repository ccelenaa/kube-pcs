'use strict';

module.exports = {
  bind: {
    host: '0.0.0.0',
    port: 80
  },
  database: {
    client: 'pg',
    version: '15',
    connection: {
      host:     'postgres.pcs.svc.cluster.local',
      database: 'pcs',
      user:     'pcs',
      password: 'pcs',
      port:     5432
    }
  },
  payment: {
    stripe: {
      publicKey: "pk_test_51P7zLsLAPUg4SYkPM4Kqy0st6kN5KrZwMcEaz3fOImGOtdhHK5Q1y8FwIM3ZyetykAHtSfFl9O3n0GAKuSkdj4mO00ZccwCL1k",
      secretKey: "sk_test_51P7zLsLAPUg4SYkPNNHhsdWbrNqqz8X1yg6j6WblnC967u5jp1mH2mC7HG5ZP5SzvC2mSAUqlIpNmQKkKZ9yRJU5000H2vaQ7p",
      apiVersion: "2022-11-15",
      webhooks: {
        secret: "whsec_xmNhd7mupPsFPdDCXxmSyOIfX62UKyvz"
      }
    }
  },
  rabbitmq: {
    connection: {
      protocol: 'amqp',
      hostname: 'rabbitmq.pcs.svc.cluster.local',
      port:     5672,
      username: 'admin',
      password: 'admin',
      vhost:    'pcs',
    }
  }
}